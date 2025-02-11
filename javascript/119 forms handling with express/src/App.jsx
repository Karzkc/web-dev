
import { useState } from 'react';
import { useForm } from 'react-hook-form'


function App() {
  const [toggle, setToggle] = useState(true)
  const handletoggle = () => {
    setToggle(!toggle)
  }

  const {
    register,
    handleSubmit,
    setError,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm();
  const customdelay = (delay) => {
    return new Promise((resolve, reject) => {
      setInterval(() => {
        resolve()
      }, delay * 1000);
    })
  }


  const onSubmit = async (data) => {
    // await customdelay(2);
    let fet = fetch("http://localhost:3000/", { method: "POST", headers: {"Content-Type":"application/json"}, body: JSON.stringify(data) })
    let res = (await fet).text()
    console.log(data,res);
    // if (data.Name === "Kartik") {
    //   setError("right", { message: "User Kartik is successfully registered" });
    // } else if (data.Name === "Chiku") {
    //   setError("blocked", { message: "User 'Chiku' is blocked from the server for 1 week" });
    // } else {
    //   setError("form", { message: "Invalid Credentials, Enter the correct username!!!" });
    // }
  };

  return (
    <>
      {isSubmitting && <div>Submitting...</div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input placeholder='Name' {...register("Name", { required: true, minLength: { value: 3, message: "min length is 3" }, maxLength: { value: 10, message: "max length is 10" } })} type="text" /> <br />
          <div style={{ color: "red" }}>{errors.Name && errors.Name.message}</div>
          <input placeholder='Password' {...register("Password", { required: true })} type="password" /> <br />
          <input disabled={isSubmitting} type="submit" name="submit" id="" />
          <div style={{ color: "green" }}>{errors.right && errors.right.message}</div>
          <div style={{ color: "red" }}>{errors.form && errors.form.message}</div>
          <div style={{ color: "red" }}>{errors.blocked && errors.blocked.message}</div>
        </form>
        <br /><br />

      </div>
    </>
  )
}

export default App
