import { useAppDispatch, UseAppSelector } from './hooks/redux-hooks';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/protectedRoute';
import UserPage from './pages/user';
import LoginPage from './pages/login';

function App() {
  const { token } = UseAppSelector(state => state.token);
  const dispatch = useAppDispatch();

  const handleRemoveToken = () => {

  }
  console.log(token)

  return (
    <div className="App">
      <header className='bg-black text-xl lg:text-2xl text-white text-center py-5 font-bold'>
        Test Coding Front End by: Reynaldy <br/>
        {token && (
          <button 
            className='border-2 border-white px-3 py-1 mt-4 text-sm'
            onClick={handleRemoveToken}
          >Logout</button>
        )}
      </header>

      <div className='w-[90%] m-auto'>
        <Routes>
          <Route path='/' element={<LoginPage/>} /> 
          <Route element={<ProtectedRoute/>}>
            <Route path='/user' element={<UserPage/>} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
