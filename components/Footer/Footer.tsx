import Instagram from '../../public/assests/Instagram.svg'
import LinkedIn from '../../public/assests/LinkedIn.svg'
import Mail from '../../public/assests/Mail.svg'

const Footer = () => {
    return(
        <div className='lg:flex text-TextMain text-center py-6'>
            <div className='lg:flex-1 mx-10'>
                <h1 className='text-2xl'>Alexa Dev SRM</h1>
                <h2 className='text-md'>alexadevsrm.com</h2>
                <div className='grid grid-cols-3 mt-4 px-14'>
                    <Instagram className='lg:mx-10 mx-4'/>
                    <LinkedIn className='lg:mx-10 mx-4'/>
                    <Mail className='lg:mx-10 mx-4'/>
                </div>
            </div>
            <div className='lg:flex-1 lg:mt-0 mt-5 mx-10'>
                <h1 className='text-2xl'>School of Computing</h1>
                <h2 className='text-md'>SRM Institute of Science and Technology</h2>
                <div className='grid grid-cols-2 mt-4 px-24'>
                    <Instagram className='lg:mx-10 mx-4'/>
                    <LinkedIn className='lg:mx-10 mx-4'/>
                </div>
            </div>
            <div className='lg:flex-1 lg:mt-0 mt-5 mx-10'>
                <h1 className='text-2xl'>Github Community SRM</h1>
                <h2 className='text-md'>githubsrm.tech</h2>
                <div className='grid grid-cols-3 mt-4 px-14'>
                    <Instagram className='lg:mx-10 mx-4'/>
                    <LinkedIn className='lg:mx-10 mx-4'/>
                    <Mail className='lg:mx-10 mx-4'/>
                </div>
            </div>
        </div>
    )
}

export default Footer;