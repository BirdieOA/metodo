import React from 'react';
import Publicidad from './Publicidad';

export default function Flyer() {
    return (
        <>
            <section
                className='grid grid-cols-1 lg:grid-cols-3 px-10 lg:px-20 pt-10 lg:pt-24 pb-10 font-semibold gap-4'
                id='flyer'
            >
                <div className='col-span-1 lg:col-span-3 flex justify-center'>
                    <img
                        className='my-10 h-40 lg:h-28 lg:rounded-lg'
                        src='./logoroundedsvg.svg'
                        alt=''
                    />
                </div>
                <div className='my-10 pb-4 text-3xl lg:text-3xl flex justify-center items-center text-center text-[#1B365C] col-span-1 lg:col-span-3'>
                    <h1 className='font-poppinsThin lg:text-4xl'>
                        Implementar{' '}
                        <span className='text-white space-x-20'>“El Método”</span> para la
                        evolución de la enseñanza, <br /> recuperar el estado físico y la
                        neuro plasticidad. <br /> <br />
                    </h1>
                </div>
                <div className='col-span-1 lg:col-span-4 flex flex-col lg:flex-row justify-center items-center gap-4'>
                    <img
                        src="/flyer/01.svg"
                        alt=""
                        className='h-80 lg:w-full  col-span-1 drop-shadow-lg'
                        loading='lazy'
                    />
                    <img
                        src="/flyer/02.svg"
                        alt=""
                        className='h-80 lg:w-full  col-span-1 drop-shadow-lg'
                        loading='lazy'
                    />
                    <img
                        src="/flyer/03.svg"
                        alt=""
                        className='h-80 lg:w-full  col-span-1 drop-shadow-lg'
                        loading='lazy'
                    />
                    <img
                        src="/flyer/04.svg "
                        alt=""
                        className='h-80 lg:w-full col-span-1 drop-shadow-lg'
                        loading='lazy'
                    />
                </div>
                <div className='col-span-1 lg:col-span-3'>
                    <div className='flex justify-center lg:pb-5'>
                        <h1 className='mt-20 text-2xl text-center lg:text-2xl text-slate-700 font-poppinsRegular'>
                            ESPACIO PUBLICITARIO
                        </h1>
                    </div>
                </div>
                <div className='col-span-1 lg:col-span-3 lg:mx-auto lg:mt-4'>
                    <Publicidad />
                </div>
                <div className='col-span-1 lg:col-span-3 flex justify-center text-center text-slate-700 mt-10'>
                    <span className='text-red-600'>*</span> Solicite su espacio
                    publicitario a través de contacto
                </div>
            </section>
        </>
    );
}
