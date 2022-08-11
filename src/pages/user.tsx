import * as React from 'react';
import {useDropzone} from 'react-dropzone';
import { useMemo } from 'react';
import Masonry from 'react-masonry-css';

interface IUserPageProps {
}

const UserPage: React.FunctionComponent<IUserPageProps> = (props) => {
  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject
  } = useDropzone();
  
  const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out'
  };
  
  const focusedStyle = {
    borderColor: '#2196f3'
  };
  
  const acceptStyle = {
    borderColor: '#00e676'
  };
  
  const rejectStyle = {
    borderColor: '#ff1744'
  };

  const style: any = useMemo(() => ({
    ...baseStyle,
    ...(isFocused ? focusedStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isFocused,
    isDragAccept,
    isDragReject
  ]);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  console.log(acceptedFiles);
  
  return (
    <div className='w-full mt-10 h-24'>
      <div {...getRootProps({style})}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid mt-10"
        columnClassName="my-masonry-grid_column"
      >
        <img src="https://source.unsplash.com/random/300x200" alt="" />
        <img src="https://source.unsplash.com/random/400x300" alt="" />
        <img src="https://source.unsplash.com/random/300x500" alt="" />
        <img src="https://source.unsplash.com/random/300x500" alt="" />
        <img src="https://source.unsplash.com/random/500x700" alt="" />
        <img src="https://source.unsplash.com/random/400x300" alt="" />
      </Masonry>
    </div>
  )
};

export default UserPage;
