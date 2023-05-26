import flagUK from '~/assets/images/flag-uk.png'
import google from '~/assets/images/google.png'

export default function MainLayout() {
  return (
    <div>
      <main className='h-screen md:py-8 md:px-6 md:bg-[#e0e0e0]'>
        <div className='h-full'>
          <div className='flex flex-col-reverse md:flex-row'>
            <div className='w-full md:w-1/2 md:rounded-tl-[62px] md:rounded-bl-[62px] md:bg-[#f6f6f6]'>
              <div className='md:p-12 mt-4 md:mt-0 pb-6 md:pb-0'>
                <div className='flex items-center justify-between mb-12'>
                  <div className='uppercase font-bold text-4xl md:text-4xl'>Haze.</div>
                  <div className='px-9 py-3 flex items-center border border-solid border-[#d7d7d7] hover:bg-white rounded-[42px] cursor-pointer transition'>
                    <div className='flex items-center gap-1 mr-2'>
                      <img src={flagUK} alt='uk' className='w-6 h-6 object-cover' />
                      <div className='font-medium'>EN</div>
                    </div>
                    <i className='fas fa-angle-down text-base'></i>
                  </div>
                </div>

                <div className='w-4/5 mx-auto flex flex-col items-center justify-center'>
                  <div className='font-black text-6xl md:text-8xl'>Hi there!</div>
                  <div className='font-medium mb-12 text-center'>Welcome to Haze. Community Dashboard</div>
                  <div className='w-full py-3 flex items-center justify-center gap-x-4 border border-solid rounded-xl border-[#d7d7d7] hover:bg-white cursor-pointer transition duration-300'>
                    <img src={google} alt='google' className='w-6 h-6 object-cover' />
                    <div className='font-medium'>Log in with Google</div>
                  </div>
                  <div className='w-full flex gap-3 items-center justify-center my-12'>
                    <hr className='w-[20%]' />
                    <div>or</div>
                    <hr className='w-[20%]' />
                  </div>
                  <form action='#' className='w-full'>
                    <div className=''>
                      <input
                        type='email'
                        placeholder='Your email'
                        className='w-full py-3 pl-4 rounded-xl mb-4 transition-all outline-none border-2 border-[#d7d7d7] border-solid focus:border-2 focus:border-[#838383] focus:border-solid'
                      />
                    </div>
                    <div className=''>
                      <input
                        type='password'
                        placeholder='Password'
                        className='w-full py-3 pl-4 rounded-xl transition-all outline-none border-2 border-[#d7d7d7] border-solid focus:border-2 focus:border-[#838383] focus:border-solid'
                      />
                    </div>
                    <a
                      href='/#'
                      className='mt-4 mb-8 flex flex-row-reverse font-semibold text-sky-500 hover:text-sky-400 transition duration-300 text-lg pointer'
                    >
                      Forgot password?
                    </a>
                    <button
                      type='submit'
                      className='w-full py-4 bg-black text-[#f6f6f6] text-xl font-bold rounded-3xl transition duration-300 hover:opacity-80'
                    >
                      Log In
                    </button>
                  </form>
                  <div className='mt-8'>
                    <span className='mr-2 '>Don't have account?</span>
                    <a
                      href='/#'
                      className='font-semibold text-sky-500 hover:text-sky-400 transition duration-300 text-lg pointer'
                    >
                      Sign up
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full md:w-1/2 login-right relative md:rounded-tr-[62px] md:rounded-br-[62px] '>
              <div className='md:p-12'>
                <div className='flex items-center justify-between md:justify-end mb-8'>
                  <button className='text-[#f6f6f6] font-medium border border-transparent border-solid hover:border hover:border-solid hover:border-[#f6f6f6] px-9 py-3 rounded-[42px] transition duration-300'>
                    Sign up
                  </button>
                  <button className='text-[#f6f6f6] font-medium border border-transparent border-solid hover:border hover:border-solid hover:border-[#f6f6f6] px-9 py-3 rounded-[42px] transition duration-300'>
                    Join us
                  </button>
                </div>
                <div className='flex items-center justify-between px-4 md:px-0'>
                  <div className='flex items-center gap-3'>
                    <div className='bg-[#f6f6f6] rounded-full px-3 py-3'>
                      <i className='fas fa-users text-3xl'></i>
                    </div>
                    <div className='flex flex-col font-medium text-[#f6f6f6]'>
                      <div>Largest Space</div>
                      <div>Community</div>
                    </div>
                  </div>
                  <hr className='w-[60px] bg-[#f6f6f6] mx-4' />
                </div>
                <div className='absolute bottom-[10%] left-[5%] w-[80%]'>
                  <div className='max-w-md'>
                    <div className='text-[#f6f6f6] text-3xl font-bold mb-2'>Go anywhere you want in a</div>
                    <div className='text-[#f6f6f6] text-3xl font-bold'>Galaxy full of wonders!</div>
                  </div>
                  <div className='flex items-center justify-between mt-4'>
                    <div className='flex items-center text-[#f6f6f6] font-medium'>
                      <div>01</div>
                      <hr className='w-[60px] bg-[#f6f6f6] mx-4' />
                      <div>06</div>
                    </div>
                    <div className='flex items-center gap-2'>
                      <div className='rounded-3xl px-3 py-2 cursor-pointer border  border-[#f6f6f6] border-solid hover:bg-[#f1f1f14a] transition-all duration-300'>
                        <i className='fa fa-light fa-arrow-left text-[#f6f6f6]'></i>
                      </div>
                      <div className='rounded-3xl px-3 py-2 cursor-pointer border  border-[#f6f6f6] border-solid hover:bg-[#f1f1f14a] transition-all duration-300'>
                        <i className='fa fa-light fa-arrow-right text-[#f6f6f6]'></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
