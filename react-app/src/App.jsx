import {TextField} from '@mui/material'
import {Button} from '@mui/material'

function App() {

  return (
      <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column',
        textAlign: 'center',
        backgroundColor: '#87CEEB',
      }}
      >

      <h1> Iniciar sesion</h1>
      
      <section className="form-register">
        <h4>Formulario Registro</h4>
        <TextField id="outlined-basic" label="Ingrese su nombre" variant="outlined" />
        <br></br>
        <TextField id="outlined-basic" label="Ingrese sus apellidos" variant="outlined" />
        <br></br>
        <TextField id="outlined-basic" label="Ingrese su correo" variant="outlined" />
        <br></br>
        <TextField id="outlined-basic" label="Ingrese su numero de teléfono" variant="outlined" />
        
        <p>Estoy de acuerdo con <a href="#">Términos y Condiciones</a></p>
        <Button variant="contained">Registrar</Button>
        <p><a href="#">¿Ya tienes una Cuenta?</a></p>
      </section>
    </div>
  );
}

export default App
