import Image from 'next/image'
import logo from '../assests/logo.svg'
import { InputField, InputIcon, InputRoot } from '../components/Input'
import { Copy, Link } from 'lucide-react'
import { IconButton } from '../components/IconButton'
export default function InvatePage(){
    return(
        <div className="min-h-dvh flex items-center justify-between gap-16 flex-col md:flex-row">
            <div className="flex flex-col gap-10 w-full max-w-[550px]">
                <Image src={logo} alt='logo' width={108.5} height={30}/>
                <div className='space-y-2'>
                    <h1 className='text-4xl font-semibold font-heading text-gray-100 leading-none'>Inscrição confirmado</h1>
                    <p className='text-gray-300'>Para entrar no evento, acesse o link enviado para o seu e-mail.</p>
                </div>

                <div className='space-y-6'>
                <div className='space-y-3'>
                    <h2 className='text-gray-200 text-xl font-semibold leading-none'>Indique e ganhe</h2>
                    <p className='text-gray-300'>Convide mais pessoas para o evento e concorra a prêmios exclusivos! É só compartilhar o link</p>
                </div>
                <InputRoot>
                    <InputIcon>
                        <Link className='size-5'/>
                    </InputIcon>
                    <InputField readOnly defaultValue="http://localhost:3000/1209319023091-23"/>
                    <IconButton className='-mr-2'>
                        <Copy className='size-5'/>
                    </IconButton>
                </InputRoot>
                
              

            </div>
            </div>

           
        </div>
    )
}