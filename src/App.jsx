
import { useForm } from "react-hook-form"; 


function App() {

  const { register, handleSubmit, 
    formState: { errors } 
  } = useForm();

  console.log(errors);

  const onSubmit = handleSubmit( (data) => {
    console.log(data);
  });

  return (
    <form onSubmit={ onSubmit }>

      {/*Nombre*/}
      <label htmlFor="nombre">Nombre</label>
      <input 
        type="text" 
        { ...register("nombre", {
          required: true,
        })} 
      />
      {
        errors.nombre && <span> Nombre es Requerido </span>
      }

      {/*Correo*/}
      <label htmlFor="correo">Correo</label>
      <input 
        type="email" 
        { ...register("email") }
      />

      {/*Password*/}
      <label htmlFor="password">Password</label>
      <input 
        type="password" 
        { ...register('paswword') }
      />

      {/*Confirmar Password*/}
      <label htmlFor="confirmarPassword">Confirmar Password</label>
      <input 
        type="password" 
        { ...register('confirmarPassword') }
      />

      {/*Fecha de Nacimiento*/}
      <label htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
      <input 
        type="date" 
        { ...register('fechaNacimiento') }
      />

      {/*país*/}
      <label htmlFor="pais">País</label>
      <select 
        { ...register("pais") }
      >
        <option value="mx">México</option>
        <option value="co">Colombia</option>
        <option value="ar">Argentina</option>
        <option value="ch">chile</option>
      </select>

      {/*file*/}      
      <label htmlFor="file">Foto de Perfil</label>
      <input 
        type="file" 
        { ...register("file") }
      />

      {/*Terminos*/}
      <label htmlFor="terminos">Acepto términos y condiciones</label>
      <input 
        type="checkbox" 
        { ...register("terminos") }
      />

      <button type="submit">Enviar</button>

    </form>

  )
}

export default App;