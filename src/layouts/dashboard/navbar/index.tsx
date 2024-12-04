import { IoNotificationsOutline } from 'react-icons/io5';
import { IoSettingsOutline } from 'react-icons/io5';
import { RxAvatar } from 'react-icons/rx';
import { IoIosHelpCircleOutline } from 'react-icons/io';

export default function NavbarHorizontal() {
  return (
    <div>
      <div className="flex gap-10 justify-between border-b p-2">
        <input
          type="text"
          className="w-96 border p-1 rounded-lg bg-gray-200  hover:flex-1 "
          placeholder="Search"
        />
        <div className="flex items-center gap-2">
          <IoNotificationsOutline
            title="Notification"
            className="rounded-full  h-10 w-10 p-1 text-gray-500 dark:text-blue-500 hover:bg-gray-200 cursor-pointer"
          />
          <IoSettingsOutline
            title="Setting"
            className="rounded-full  h-10 w-10 p-1 text-gray-500 dark:text-blue-500 hover:bg-gray-200 cursor-pointer"
          />
          <IoIosHelpCircleOutline
            title="Help"
            className="rounded-full  h-10 w-10 p-1 text-gray-500 dark:text-blue-500 hover:bg-gray-200 cursor-pointer"
          />
          <RxAvatar
            title="Avatar"
            className="rounded-full  h-10 w-10 p-1 text-gray-500 dark:text-blue-500 hover:bg-gray-200 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
