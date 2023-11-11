import React, { createContext, useContext, FC, useState } from 'react';

// Tạo một context với kiểu dữ liệu của nó
interface UserContextProps {
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

// Component cha, cung cấp giá trị cho context
const ParentComponent: FC = () => {
  const [user, setUser] = useState('John Doe');
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <h1>{`Hello ${user}!`}</h1>
      <ChildComponent />
    </UserContext.Provider>
  );
};

// Component con, sử dụng useContext để lấy giá trị từ context
const ChildComponent: FC = () => {
  const userContext = useContext(UserContext);

  if (!userContext) {
    return null; // Tránh lỗi nếu context không tồn tại
  }

  return (
    <>
      <h2>{`Child Component: ${userContext.user}`}</h2>
      <button className='text-[red]' onClick={() => userContext.setUser('New User')}>
        Change User
      </button>
    </>
  );
};

// App component render ParentComponent
const App: FC = () => {
  return (
    <div>
      <h1>Context Example with TypeScript</h1>
      <ParentComponent />
    </div>
  );
};

export default App;
