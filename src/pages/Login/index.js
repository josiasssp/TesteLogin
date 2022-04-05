import React, {useState} from 'react';
import './login.css';
import { MdEmail,MdLock } from "react-icons/md";
import { HiEye, HiEyeOff } from "react-icons/hi";

const Login = () => {
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [show, setShow] = useState(false)

const handleClick = (e) => {
    e.preventDefault()
    setShow(!show);
}    

    return (
    <div className="login">
      <div className="login-logo">
          <img src="https://www.cidademarketing.com.br/marketing/wp-content/uploads/2021/10/o_boticario_marca.jpg"
               alt="Login App"
          />
      </div>
      <div className="login-right">
          <h1>Acessar o App</h1>

          <div className="login-InputEmail">
              <MdEmail/>
            <input type="text"
              placeholder="Digite um email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              />
          </div>

          <div className="login-InputPassword">
              <MdLock/>
              <input 
                type={show ? "text" : "password" }
                placeholder="Digite sua senha"
                value={password}
                onChange={e => setPassword(e.target.value)}
                />
                <div className='login-eye'>
                    { show ? (
                        <HiEye
                            size={20}
                            onClick={handleClick}
                        />
                            ) :
                       <HiEyeOff
                       size={20}
                       onClick={handleClick}/>     
                      }
                   <div/>
                </div>
            
            </div>

            <button type="submit">
                Entrar
            </button>

            <h4>Não tenho login!</h4>
            <button type="submit">
                Cadastrar
            </button>
      </div>
    </div>
    );
}

export default Login;