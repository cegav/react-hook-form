function App() {

  return (
    <form action="">

      {/*Nombre*/}
      <label htmlFor="nombre">Nombre</label>
      <input type="text" />

      {/*Correo*/}
      <label htmlFor="correo">Correo</label>
      <input type="email" />

      {/*Password*/}
      <label htmlFor="password">Password</label>
      <input type="password" />

      {/*Confirmar Password*/}
      <label htmlFor="confirmarPassword">Confirmar Password</label>
      <input type="password" />

      {/*Fecha de Nacimiento*/}
      <label htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
      <input type="date" />

      {/*país*/}
      <label htmlFor="pais">País</label>
      <select name="" id="">
        <option value="mx">México</option>
        <option value="co">Colombia</option>
        <option value="ar">Argentina</option>
        <option value="ch">chile</option>
      </select>

      {/*file*/}
      <label htmlFor="file">Foto de Perfil</label>
      <input type="file" />

      {/*Terminos*/}
      <label htmlFor="terminos">Acepto términos y condiciones</label>
      <input type="checkbox" />

      <button>Enviar</button>

    </form>

  )
}

export default App;