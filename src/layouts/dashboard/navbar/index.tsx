import { IoNotificationsOutline } from 'react-icons/io5';

export default function NavbarHorizontal() {
  return (
    <div>
      <div className="flex gap-10 justify-between border p-2">
        <input
          type="text"
          className="w-96 border p-1 rounded-lg bg-gray-200 outline-none"
          placeholder="Search"
        />
        <div className="flex items-center gap-5">
          <IoNotificationsOutline className="rounded-full  h-10 w-10 p-1 text-blue-300 dark:text-blue-500" />
          <IoNotificationsOutline />
          <IoNotificationsOutline />
          <IoNotificationsOutline />
          <IoNotificationsOutline />
        </div>
      </div>
    </div>
  );
}
