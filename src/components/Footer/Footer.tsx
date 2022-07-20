import dslogo from '../../assets/dslogo.svg';
import githublogo from '../../assets/icons/logo-github.svg';
import linkedinlogo from '../../assets/icons/icon-linkedin-dark.svg';
import mailicon from '../../assets/icons/mailicon.png';
const Footer = () => {
  return (
    <footer className=' grid h-48 w-full grid-cols-2  grid-rows-3 items-center gap-x-10 bg-slate-500 pb-6 pt-4 text-lg font-bold'>
      <a
        className='col-span-1 row-span-2 h-auto justify-self-center '
        href='https://damiansobieraj.com'
      >
        <img className='h-24' src={dslogo} alt='Damian Sobieraj Logo' />
      </a>
      <div className='col-span-1 row-span-2 flex flex-col items-start justify-start p-4 '>
        <div className='flex gap-1'>
          <img className='h-6 w-6' src={mailicon} alt='github' />
          <a href='mailto:damiansobierajdev@gmail.com'>Email</a>
        </div>

        <div className='flex gap-1'>
          <img className='h-6 w-6' src={linkedinlogo} alt='github' />
          <a href='https://www.linkedin.com/in/damiansobieraj/'>LinkedIn</a>
        </div>
        <div className='flex gap-1'>
          <img className='h-6 w-6' src={githublogo} alt='github' />
          <a href='https://github.com/DevmianS'>Github</a>
        </div>
      </div>
      <span className='col-span-2 self-end justify-self-center'>
        ©2022 Damian Sobieraj
      </span>
    </footer>
  );
};

export default Footer;