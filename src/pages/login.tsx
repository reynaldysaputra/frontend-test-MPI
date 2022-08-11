import { useCallback, useEffect, useState } from 'react';
import DocumentTitle from 'react-document-title';
import { useNavigate } from 'react-router-dom';
import Button from '../components/button';
import Input from '../components/input';
import { useAppDispatch, UseAppSelector } from '../hooks/redux-hooks';
import { useLoginUserMutation } from '../slice/loginUser';
import { addTokenUser } from '../slice/tokenUser';
import { toast } from 'react-toastify';
import { toastError, toastSuccess } from '../utils/toast';

function LoginPage(){
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {token} = UseAppSelector(state => state.token);
  const [mutateUser] = useLoginUserMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleUsername = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value), []);
  const handlePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value), []);

  const handleSubmitLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutateUser({username, password})
      .then((res: any)  => {
        if(res.error) throw new Error(res.error.data);
        dispatch(addTokenUser({token: res.data.token}))
        navigate("/user");
        toastSuccess("Login Successful");
      }).catch((err: any) => {
        toastError(err);
      })
    setUsername("");
    setPassword("");
  }

  useEffect(() => {
    if(token) navigate('/user');
  }, [])

  return(
    <DocumentTitle title='Login'>
      <>
        <main className='w-full h-[90vh] flex justify-center items-center'>
          <form className='w-[50%] lg:w-[25%] space-y-4' onSubmit={handleSubmitLogin}>
            <Input 
              type='text' 
              placeholder='Username' 
              name='username' 
              value={username}
              onChange={handleUsername}
            />
            <Input 
              type='password' 
              placeholder='Password' 
              name='password'
              value={password} 
              onChange={handlePassword}
            />
            <Button>
              Login
            </Button>
          </form> 
        </main>
      </>
    </DocumentTitle>
  )
}

export default LoginPage;