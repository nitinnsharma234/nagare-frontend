import { RxAvatar } from 'react-icons/rx';
import { BiChevronDown } from 'react-icons/bi';
import NavConfig from './navConfig';
import useAuth from '../../../hooks/useAuth';
import { useNavigate } from 'react-router';
import { PATH_AUTH } from '../../../routes/path';
import toast from 'react-hot-toast';

export default function NavBarVertical() {
  const navigate = useNavigate();
  const { logout, user } = useAuth();

  return (
    <div className="h-[100vh] border-r border-dashed min-w-80 p-1">
      <div className="p-2 font-semibold mb-2 font-mono text-blue-600">
        NAGARE
      </div>
      <div className="border flex gap-1 items-center p-2 rounded-lg  hover:bg-gray-200 ">
        <RxAvatar className="text-4xl" />
        <div className=" leading-5">
          <p className="font-medium">
            {user?.firstName.toUpperCase()}
            &nbsp;
            {user?.lastName.toUpperCase()}
          </p>
          <p className=" text-sm text-gray-500 ">{user?.role}</p>
        </div>
      </div>
      <hr className="h-1 my-2" />
      {NavConfig &&
        NavConfig.map((items: any, index: any) => (
          <div key={index} className="">
            <div className="flex items-center mt-1 mb-0.5 gap-0">
              <BiChevronDown className="text-2xl hover:translate-y" />
              <p className="text-sm font-bold">{items?.subheader}</p>
            </div>
            {items.items?.map((item: any, indexs: any) => (
              <ul className="list-none" key={indexs}>
                <li className="mb-2">
                  <div className="flex items-center gap-1 p-2 border rounded-lg hover:bg-gray-200  hover:border-l-4 hover:border-l-gray-500">
                    {/* <img
                      src={item?.icon}
                      alt="avator"
                      height={30}
                      width={30}
                      className="rounded-full"
                    /> */}
                    <RxAvatar className="text-2xl" />
                    <p>{item?.title}</p>
                  </div>
                </li>
              </ul>
            ))}
          </div>
        ))}
      <div>
        <button
          onClick={async () => {
            try {
              await logout();
              navigate(PATH_AUTH.login);
            } catch (error: any) {
              toast.error(error);
            }
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
