"use client"

import React, { useState } from 'react'
import { MODE } from '../../enums/auth-mode.enum';

import { AuthDTO } from '../../types';
import { useAuth } from '../../hooks/client/auth/useHandleAuth';


function Login() {

    const {
        mode,
        setMode,
        email,
        setEmail,
        password,
        setPassword,
        username,
        setUsername,
        emailCode,
        setEmailCode,
        isLoading,
        error,
        message,
        handleSubmit,
        formTitle,
        buttonTitle,
    } = useAuth();

    return (
        <div className="h-[calc(100vh-80px)] px-4 md:px-8 lg:px-16 pb-10 xl:px-32 2xl:px-64 flex items-center justify-center">
            <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
                <h1 className="text-2xl font-semibold">{formTitle}</h1>

                {mode === MODE.REGISTER ? (
                    <div className="flex flex-col gap-2">
                        <label className="text-sm text-gray-700">Nombre de usuario</label>
                        <input
                            type="text"
                            name="username"
                            placeholder="juan"
                            className="ring-2 ring-secundary rounded-md p-4"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                ) : null}

                {mode !== MODE.EMAIL_VERIFICATION ? (
                    <div className="flex flex-col gap-2">
                        <label className="text-sm text-gray-700">Correo electrónico</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="juan@gmail.com"
                            className="ring-2 ring-secundary rounded-md p-4"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                ) : (
                    <div className="flex flex-col gap-2">
                        <label className="text-sm text-gray-700">Código de verificación</label>
                        <input
                            type="text"
                            name="emailCode"
                            placeholder="Código"
                            className="ring-2 ring-secundary rounded-md p-4"
                            onChange={(e) => setEmailCode(e.target.value)}
                        />
                    </div>
                )}

                {(mode === MODE.LOGIN || mode === MODE.REGISTER) && (
                    <div className="flex flex-col gap-2">
                        <label className="text-sm text-gray-700">Contraseña</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Ingresa tu contraseña"
                            className="ring-2 ring-secundary rounded-md p-4"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                )}

                {mode === MODE.LOGIN && (
                    <div
                        className="text-sm underline cursor-pointer"
                        onClick={() => setMode(MODE.RESET_PASSWORD)}
                    >
                        ¿Olvidaste tu contraseña?
                    </div>
                )}

                <button
                    className="bg-main text-white p-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isLoading}
                >
                    {isLoading ? "Cargando..." : buttonTitle}
                </button>

                {error && <div className="text-red-600">{error}</div>}

                {mode === MODE.LOGIN && (
                    <div
                        className="text-sm underline cursor-pointer"
                        onClick={() => setMode(MODE.REGISTER)}
                    >
                        ¿No tienes una cuenta?
                    </div>
                )}

                {mode === MODE.REGISTER && (
                    <div
                        className="text-sm underline cursor-pointer"
                        onClick={() => setMode(MODE.LOGIN)}
                    >
                        ¿Ya tienes una cuenta?
                    </div>
                )}

                {mode === MODE.RESET_PASSWORD && (
                    <div
                        className="text-sm underline cursor-pointer"
                        onClick={() => setMode(MODE.LOGIN)}
                    >
                        Volver al inicio de sesión
                    </div>
                )}

                {message && <div className="text-green-600 text-sm">{message}</div>}
            </form>
        </div>
    );
};

export default Login