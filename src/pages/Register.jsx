import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Avatar from "@mui/material/Avatar"
import LockIcon from "@mui/icons-material/Lock"
import image from "../assets/result.svg"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import { Link } from "react-router-dom"
import TextField from "@mui/material/TextField"
import { Formik, Form } from "formik"
import useAuthCall from "../hooks/useAuthCall"
import { object, string } from "yup"





const Register = () => {


  const { register } = useAuthCall()
  

  // const registerSchema = object({
  //   email: string()
  //     .email("Lutfen valid bir email giriniz")
  //     .required("Bu alan zorunludur"),
  //   password: string()
  //     .required("Bu alan zorunludur")
  //     .min(8, "En az 8 karakter girilmelidir")
  //     .max(16, "En fazla 16 karakter girilmelidir")
  //     .matches(/\d+/, "En az bir rakam içermelidir.")
  //     .matches(/[a-z]/, "En az bir küçük harf içermelidir.")
  //     .matches(/[A-Z]/, "En az bir büyük harf içermelidir.")
  //     .matches(/[!,?{}><%&$#£+-.]+/, "En az bir özel karekter içermelidir."),
  //   first_name: string().min(8),
  //   last_name: string().min(8),
  //   username: string().min(8),
  // })
  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        rowSpacing={{ sm: 3 }}
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <Grid item xs={12}>
          <Typography variant="h3" color="primary" align="center">
            STOCK APP
          </Typography>
        </Grid>

        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.light",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={2}
            color="secondary.light"
          >
            Register
          </Typography>

          <Formik
            initialValues={{
              username: "",
              first_name: "",
              last_name: "",
              email: "",
              password: "",
            }}
            
            onSubmit={(values, actions) => {
              console.log("formsubmit");
              register({ ...values, password2: values.password })
              actions.resetForm()
              actions.setSubmitting(false)
            }}
          >
            {/* buradaki touched ve error labeldaki hatalari calistiran fonksiyon */}

            {({ handleChange, handleBlur, values  }) => (
              <Form >
                <Box 
                  sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <TextField
                    label="User Name"
                    name="username"
                    id="userName"
                    type="text"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.username}
                    

                  />
                  <TextField
                    label="First Name"
                    name="first_name"
                    id="firstName"
                    type="text"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.first_name}
                  />
                  <TextField
                    label="Last Name"
                    name="last_name"
                    id="last_name"
                    type="text"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.last_name}
                  />
                  <TextField
                    label="Email"
                    name="email"
                    id="email"
                    type="email"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  <TextField
                    label="password"
                    name="password"
                    id="password"
                    type="password"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  <Button type="submit" variant="contained" size="large">
                    Submit
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>


          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Link to="/">Do you have an account?</Link>
          </Box>
        </Grid>

        <Grid item xs={0} sm={7} md={6}>
          <Container>
            <img src={image} alt="" />
          </Container>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Register
