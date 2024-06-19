import { ChangeEvent, FormEvent, useState } from "react"
import { SingUpType } from "../type/type";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const [isVisibleLogin, setIsVisibleLogin] = useState(true);
    const[users, setUsers] = useState<SingUpType>({
        name: "",
        email: "",
        password: ""
    })

    const onChangeData = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUsers((prev) => ({
          ...prev,
          [name]: value,
        }));
      };

    const handleClick = () => {
        setTimeout(() => {
            setIsVisibleLogin(!isVisibleLogin)
        }, 1000);
    }

    const onSubmitData = async (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        try {
            const res = await fetch("http://localhost:8080/users", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(users),
            });
            const data = await res.json();
            console.log(data);
            if (!res.ok) {
              throw new Error("Failed to fetch users");
            }
            navigate("/");
          } catch (error) {
            console.error(error);
          }
    }

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
          const res = await fetch("http://localhost:8080/users/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(users),
          });
          const data = await res.json();
          console.log(data);
          if (!res.ok) {
            throw new Error("Failed to fetch users");
          }
          navigate("/");
        } catch (error) {
          console.error(error);
        }
      };

    return (
        <div className="w-screen h-screen flex justify-center items-center bg-indigo-100">
            <div className="w-4/6 h-4/6 flex flex-row bg-white rounded-3xl relative">
                <div className={` w-full h-full rounded-3xl flex flex-row absolute ${isVisibleLogin ? 'opacity-1 z-50 Transition' : 'opacity-0'}`}>
                    <div className="w-1/2 flex flex-col items-center justify-center gap-3 text-gray-700 ">
                        <h1 className="text-xl font-bold">Sing In</h1>
                        <div className=" flex flex-row gap-2">
                            <span className="py-1 p-3 border rounded text-white">.</span>
                            <span className="py-1 p-3 border rounded text-white">.</span>
                            <span className="py-1 p-3 border rounded text-white">.</span>
                            <span className="py-1 p-3 border rounded text-white">.</span>
                        </div>
                        <p className="text-sm">or use your email password</p>
                        <form className="w-full flex flex-col items-center justify-center gap-3 px-10"
                        onSubmit={onSubmit}>
                            <input className="p-1 w-full bg-blue-gray-50 outline-none rounded" 
                            type="email" name="email" placeholder="your email" 
                            onChange={onChangeData}
                            value={users.email}/>
                            <input className="p-1 w-full bg-blue-gray-50 outline-none rounded" 
                            type="password" name="password" placeholder="your password" 
                            onChange={onChangeData}
                            value={users.password}/>
                            <p className="text-sm">Forget Your Password ?</p>
                            <button className="py-2 px-6 rounded border border-with bg-indigo-400 text-white">SING IN</button>
                        </form>
                    </div>
                    <div className=" p-9 text-center bg-indigo-400 text-white 
                        flex flex-col items-center justify-center gap-3 roundedLeft">
                        <h2 className="text-3xl font-bold">Hello, Friend!</h2>
                        <p className="text-sm">Register with your personnel details to use
                            all of site features</p>
                        <button onClick={handleClick} className="py-2 px-6 rounded border border-with">SING UP</button>
                    </div>
                </div>
                <div className={`flex flex-row absolute w-full h-full rounded-3xl  ${!isVisibleLogin ? 'opacity-1 z-50 Transition' : 'opacity-0'}`}>
                    <div className=" p-9 text-center bg-indigo-400 text-white 
                        flex flex-col items-center justify-center gap-3 roundedRigth">
                        <h2 className="text-3xl font-bold">Welcome Back!</h2>
                        <p className="text-sm">Enter your personnel details to use
                            all of site features</p>
                        <button className="py-2 px-6 rounded border border-with" onClick={handleClick}>SING IN</button>
                    </div>
                    <div className="w-1/2 flex flex-col items-center justify-center gap-3 text-gray-700">
                        <h1 className="text-xl font-bold">Create Account</h1>
                        <div className=" flex flex-row gap-2">
                            <span className="py-1 p-3 border rounded text-white">.</span>
                            <span className="py-1 p-3 border rounded text-white">.</span>
                            <span className="py-1 p-3 border rounded text-white">.</span>
                            <span className="py-1 p-3 border rounded text-white">.</span>
                        </div>
                        <p className="text-sm">or use your email for registeration</p>
                        <form className="w-full flex flex-col items-center justify-center gap-3 px-10"
                        onSubmit={onSubmitData}>
                            <input className="p-1 w-full bg-blue-gray-50 outline-none rounded" 
                            type="text" name="name" placeholder="your name" 
                            onChange={onChangeData}
                            value={users.name}/>
                            <input className="p-1 w-full bg-blue-gray-50 outline-none rounded" 
                            type="email" name="email" placeholder="your email"
                            onChange={onChangeData} 
                            value={users.email}/>
                            <input className="p-1 w-full bg-blue-gray-50 outline-none rounded" 
                            type="password" name="password" placeholder="your password" 
                            onChange={onChangeData}
                            value={users.password}/>
                            <button className="py-2 px-6 rounded border border-with bg-indigo-400 text-white">SING UP</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}
