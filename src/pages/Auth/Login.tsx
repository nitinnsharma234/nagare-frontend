import { Button, Input } from '@material-tailwind/react';
import { RxAvatar } from 'react-icons/rx';
import { Link } from 'react-router';

export default function Login() {
  return (
    <div className="bg-sky-400 border max-h-screen h-[100vh] w-full mx-auto flex justify-center items-center">
      <div className="bg-white max-w-screen-xl h-[90vh] w-[90vw] m-40 rounded-lg grid  grid-cols-2  overflow-hidden">
        <div className=" px-10 py-20 flex items-center justify-between mx-auto  text-center">
          <div>
            <RxAvatar className="text-4xl mx-auto mb-4" />
            <p className="text-2xl font-semibold mb-1">Welcome Back 👋 </p>
            <p className="text-sm text-gray-400 max-w-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
              atque. Lorem, ipsum dolor sit amet consectetur
            </p>
            <form>
              <div className="max-w-sm my-4 text-start">
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    placeholder="nagre@gmail.com"
                    className="w-full border p-1 rounded-lg bg-sky-50"
                  />{' '}
                </div>
                <div className="mt-2">
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    type="password"
                    placeholder="password"
                    className="w-full border p-1 rounded-lg bg-sky-50 "
                  />
                </div>
                <div>
                  <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg p-1 text-center w-full">
                    Login
                  </button>
                </div>
              </div>
            </form>
            <div className="max-w-screen-sm">
              <div className="flex items-center justify-center gap-1">
                <hr className="divide-x w-full" />
                <p>Or</p>
                <hr className="divide-x w-full" />
              </div>
              <div className="flex items-center justify-center cursor-pointer border rounded-lg mt-2e ">
                <img
                  src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                  alt=""
                  height={50}
                  width={50}
                />
                <p>Login in with Google </p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-1.5 mt-10">
              <p className="text-center">Don't have account?</p>
              <span className="text-blue-700">
                <Link to={'/auth/signup'}>Register</Link>
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            src="https://static.vecteezy.com/system/resources/previews/027/533/187/non_2x/free-download-watercolor-art-background-realistic-photo-ai-generative-free-png.png"
            alt=""
            className="mx-auto my-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}
