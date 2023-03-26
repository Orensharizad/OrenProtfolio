'use client'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";



type Props = {}
type Inputs = {
    name: string
    email: string
    subject: string
    message: string
};

function Contact({ }: Props) {
    const { register, handleSubmit, } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => window.location.href = `mailto:oren.sharizad12@gmail.com?subject=${data.subject}&body=Hi,my name is ${data.name},${data.message}`;


    return (
        <div className='h-screen flex relative flex-col text-center  md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center z-0'>

            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl '>
                Contact
            </h3>

            <div className='flex flex-col space-y-10 mt-12'>
                <h4 className='text-2xl font-semibold text-center'>I have got just what you need,Lets Talk.</h4>
                <div className='space-y-10'>
                    <div className='flex items-center space-x-5 justify-center'>
                        <PhoneIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>0535236226</p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <EnvelopeIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>Oren.sharizad12@gmail.com</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto' >
                        <div className='flex space-x-2 '>
                            <input {...register('name')} className='contact-input' type="text" placeholder='Name' />
                            <input {...register('email')} placeholder='Email' className='contact-input' type="text" />
                        </div>
                        <input {...register('subject')} placeholder='subject' className='contact-input' type="text" />
                        <textarea {...register('message')} placeholder='Message' className='contact-input' />
                        <button className='bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
                    </form>



                </div>
            </div>

        </div>
    )
}

export default Contact