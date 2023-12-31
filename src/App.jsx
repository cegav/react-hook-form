
import { useForm } from "react-hook-form"; 


function App() {

  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm();

  console.log(errors);

  const onSubmit = handleSubmit( (data) => {
    console.log(data);

    //Aquí iría la petición POST
    alert("Enviando datos...");

    reset();
  });

  return (
    <form onSubmit={ onSubmit }>

      {/*Nombre*/}
      <label htmlFor="nombre">Nombre</label>
      <input 
        type="text" 
        { ...register("nombre", {
          required: {
            value: true,
            message: "Nombre es requerido"
          },
          minLength: {
            value: 2,
            message: "Nombre debe tener al menos 2 caracteres"
          },
          maxLength: {
            value: 20,
            message: "Nombre No debe superar los 20 caracteres"
          },
        })} 
      />
      {
        errors.nombre && <span>{ errors.nombre.message }</span>
      }
      {/*Correo*/}
      <label htmlFor="correo">Correo</label>
      <input 
        type="email" 
        { ...register("correo", {
          required: {
            value: true,
            message: "Correo es requerido"
          },
          pattern: {
            value: /^[a-z0-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: "Correo no válido"
          }
        })}
      />
      {
        errors.correo && <span>{ errors.correo.message }</span>
      }

      {/*Password*/}
      <label htmlFor="password">Password</label>
      <input 
        type="password" 
        { ...register('password', {
          required: {
            value: true,
            message: "Password es requerido"
          },
          minLength: {
            value: 6,
            message: "El password debe tener al menos 6 cracteres",
          }
        })}
      />
      {
        errors.password && <span>{ errors.password.message }</span>
      }

      {/*Confirmar Password*/}
      <label htmlFor="confirmarPassword">Confirmar Password</label>
      <input 
        type="password" 
        { ...register('confirmarPassword', {
          required: {
            value: true,
            message: "Confirmar Password es requerido",
          },
          validate: (value) => {
            return value === watch('password') || "Las passwords no coinciden";
          }
        })}  
      />
      {
        errors.confirmarPassword && <span>{ errors.confirmarPassword.message }</span>
      }

      {/*Fecha de Nacimiento*/}
      <label htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
      <input 
        type="date" 
        { ...register('fechaNacimiento', { 
          required: {
            value: true,
            message: "Fecha de Nacimiento es requerido",
          },
          validate: (value) => {
            const fechaNacimiento = new Date(value);
            const fechaActual = new Date();
            const edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
            console.log(edad);

            return edad >= 18 || "Debe ser mayor de edad";
          }
        })}
      />
      {
        errors.fechaNacimiento && <span>{ errors.fechaNacimiento.message }</span>
      }


      {/*país*/}
      <label htmlFor="pais">País</label>
      <select 
        { ...register("pais", {
          required: {
            value: true,
            message: "Pais es requerido"
          },
        })}
      >
        <option value="">--Elige un país--</option>
        <option value="mx">México</option>
        <option value="co">Colombia</option>
        <option value="ar">Argentina</option>
        <option value="ch">Chile</option>
      </select>
      {
        errors.pais && <span>{ errors.pais.message }</span>
      }
      {
        watch('pais') && (
          <>
            <input type="text" placeholder="Provincia"
            {...register('municipio', {
              required: {
                value: true,
                message: 'Municipio es requerido'
              },
            })}
            />
            {
              errors.municipio && <span>{ errors.municipio.message }</span>
            }
          </>
        )
      }
      {/*file*/}      
      <label htmlFor="foto">Foto de Perfil</label>
      <input 
        type="file" 
        onChange={(e) => {
          console.log(e.target.files[0])
          setValue('fotoDelUsuario', e.target.files[0].name)
        }}
      />

      {/*Terminos*/}
      <label htmlFor="terminos">Acepto términos y condiciones</label>
      <input 
        type="checkbox" 
        { ...register("terminos", {
          required: {
            value: true,
            message: "Terminos es requerido",
          },
        })}
      />
      {
        errors.terminos && <span>{ errors.terminos.message }</span>
      }

      <button type="submit">Enviar</button>

      <pre>
        {JSON.stringify(watch(), null, 2)}
      </pre>

    </form>

  )
}

export default App;