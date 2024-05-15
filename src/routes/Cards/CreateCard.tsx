import { DevTool } from "@hookform/devtools";
import { LockOutlined } from "@mui/icons-material";
import { Avatar, Box, Button, CssBaseline, Grid, TextField, Typography } from "@mui/material";
import { Container } from "postcss";
import { useNavigate } from "react-router-dom";
import { CardType } from "../@types/types";
import auth from "../services/auth";
import dialogs from "../ui/dialogs";
import { DevTool } from "@hookform/devtools";


const CreateCard = () => {
    const navigate = useNavigate();


    const onCreateCard = (data: CardType) => {
        // data.name.first = name.first;
        console.log(data);
        auth
            .createCard(data) //request
            .then((res) => {
                //201 response
                localStorage.setItem("token", res.data._id);
                dialogs.success("Success", "CreateCard").then(() => {
                    navigate("/MyCards");
                });
            })
            .catch((e) => {
                dialogs.error("Error", e.response.data);
            });
    };

    return (
        <form>
        {/* <form noValidate onSubmit={handleSubmit(register)}>  */}
            <Container maxWidth="md">
                <CssBaseline />
                <Box
                    sx={{
                        mt: 20,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: "primary.light" }}>
                        <LockOutlined />
                    </Avatar>
                    <Typography variant="h5">Create Card</Typography>
                    <Box sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="title"
                                    label="title"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="subtitle"
                                    label="subtitle"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="description"
                                    label="description"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="phone"
                                    label="phone"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="email"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    id="imgURL"
                                    label="img URL"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    id="imgAlt"
                                    label="img Alt"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    id="state"
                                    label="State"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="country"
                                    label="Country"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="city"
                                    label="City"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="street"
                                    label="Street"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="houseNumber"
                                    label="House Number"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="zip"
                                    label="zip"
                                    autoFocus
                                />
                            </Grid>
                        </Grid>
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            type="submit"
                        >
                            Cancel
                        </Button>
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            type="submit"
                        >
                            Reset Credentials
                        </Button>
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            type="submit"
                        >
                            Submit
                        </Button>
                        {/* <DevTool control={control} /> */}
                    </Box>
                </Box>
            </Container>
        </form >
    );
};

export default CreateCard;