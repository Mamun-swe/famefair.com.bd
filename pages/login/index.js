import React, { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form'

import NavbarTop from '../../components/navbarTop/index'
import NavbarBottom from '../../components/navbarBottom/index'
import Footer from '../../components/footer/index'
import GotoTop from '../../components/goTop/index'

const index = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [isLoading, setLoading] = useState(false)

    const onSubmit = async (data) => {
        try {
            setLoading(true)
            console.log(data)

            setTimeout(() => {
                setLoading(false)
            }, 1500);
            // const response = await login(data)
            // if (response.status === true) {
            //     setLoading(false)
            //     localStorage.setItem('token', response.token)
            //     router.push('/account')
            // } else {
            //     setLoading(false)
            //     toast.error(response.message)
            // }
        } catch (error) {
            setLoading(false)
            toast.error(error)
        }
    }

    return (
        <div>
            <Head>
                <title>Famefair || Login</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NavbarTop />
            <NavbarBottom />

            {/* Auth container */}
            <main>
                <div className="auth-container">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="card shadow-sm border-0">
                                    <div className="card-header text-center bg-white">
                                        <h5 className="mb-0">Login</h5>
                                    </div>
                                    <div className="card-body">
                                        <form onSubmit={handleSubmit(onSubmit)}>

                                            {/* E-mail */}
                                            <div className="form-group mb-3">
                                                {errors.email && errors.email.message ? (
                                                    <small className="text-danger">{errors.email && errors.email.message}</small>
                                                ) : <small>E-mail</small>}

                                                <input
                                                    type="text"
                                                    className={errors.email ? "form-control shadow-none error" : "form-control shadow-none"}
                                                    placeholder="example@gmail.com"
                                                    {...register("email",
                                                        {
                                                            required: "E-mail is required",
                                                            pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i }
                                                        })
                                                    }
                                                />
                                            </div>

                                            {/* Password */}
                                            <div className="form-group mb-3">
                                                {errors.password && errors.password.message ? (
                                                    <small className="text-danger">{errors.password && errors.password.message}</small>
                                                ) : <small>Password</small>}

                                                <input
                                                    type="password"
                                                    className={errors.password ? "form-control shadow-none error" : "form-control shadow-none"}
                                                    placeholder="*****"
                                                    {...register("password", {
                                                        required: "Password is required",
                                                        minLength: {
                                                            value: 8,
                                                            message: "Minimun length 8 character"
                                                        }
                                                    })}
                                                />
                                            </div>

                                            <button type="submit" className="btn btn-block shadow-none" disabled={isLoading}>
                                                {isLoading ? <span>Loading...</span> : <span>Submit</span>}
                                            </button>

                                        </form>

                                        <div className="text-right mt-1">
                                            <p className="mb-1">Have no account ? <Link href="/register">Register</Link></p>
                                            <p>Forgot password ? <Link href="/reset">Reset</Link></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
                <GotoTop />
            </main>
        </div>
    );
};

export default index;