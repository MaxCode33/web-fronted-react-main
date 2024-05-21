import { LockOutlined } from "@mui/icons-material";
import { Avatar, Box, Button, Container, CssBaseline, Grid, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { DevTool } from "@hookform/devtools";
import { CardType } from "../../@types/types";
import auth from "../../services/auth";
import dialogs from "../../ui/dialogs";
import { useForm, useFormState } from "react-hook-form";
import { createCard } from "../../services/cards";


const CreateCard = () => {
    const navigate = useNavigate();
    const {
        handleSubmit,
        register,
        formState: { errors },
        control,
    } = useForm<CardType>()

    const onCreateCard = (data: CardType) => {
        // data.name.first = name.first;
        console.log(data);
        createCard(data) //request
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
        <form noValidate onSubmit={handleSubmit(onCreateCard)}>
            <Container maxWidth="md">
                <CssBaseline />
                <Box
                    sx={{
                        mt: 10,
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
                                    {...register("title", {
                                        required: "This field is mandatory",
                                        minLength: { value: 9, message: "Too short" },
                                        maxLength: { value: 14, message: "Too long" },
                                    })}
                                />
                                {errors.phone && (
                                    <p className="text-red-500">{errors.phone?.message}</p>
                                )}
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="subtitle"
                                    label="subtitle"
                                    autoFocus
                                    {...register("subtitle", {
                                        required: "This field is mandatory",
                                        minLength: { value: 2, message: "Too short" },
                                        maxLength: { value: 256, message: "Too long" },
                                    })}
                                />
                                {errors.phone && (
                                    <p className="text-red-500">{errors.phone?.message}</p>
                                )}
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="description"
                                    label="description"
                                    autoFocus
                                    {...register("description", {
                                        required: "This field is mandatory",
                                        minLength: { value: 2, message: "Too short" },
                                        maxLength: { value: 256, message: "Too long" },
                                    })}
                                />
                                {errors.phone && (
                                    <p className="text-red-500">{errors.phone?.message}</p>
                                )}
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="phone"
                                    label="phone"
                                    autoFocus
                                    {...register("phone", {
                                        required: "This field is mandatory",
                                        minLength: { value: 9, message: "Too short" },
                                        maxLength: { value: 14, message: "Too long" },
                                    })}
                                />
                                {errors.phone && (
                                    <p className="text-red-500">{errors.phone?.message}</p>
                                )}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="email"
                                    autoFocus
                                    {...register("email", {
                                        required: "This field is mandatory",
                                        minLength: { value: 10, message: "Too short" },
                                        maxLength: { value: 256, message: "Too long" },
                                    })}
                                />
                                {errors.phone && (
                                    <p className="text-red-500">{errors.phone?.message}</p>
                                )}
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
                                    {...register("address.country", {
                                        required: "This field is mandatory",
                                        minLength: { value: 2, message: "Too short" },
                                        maxLength: { value: 30, message: "Too long" },
                                    })}
                                />
                                {errors.phone && (
                                    <p className="text-red-500">{errors.phone?.message}</p>
                                )}
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="city"
                                    label="City"
                                    autoFocus
                                    {...register("address.city", {
                                        required: "This field is mandatory",
                                        minLength: { value: 2, message: "Too short" },
                                        maxLength: { value: 20, message: "Too long" },
                                    })}
                                />
                                {errors.phone && (
                                    <p className="text-red-500">{errors.phone?.message}</p>
                                )}
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="street"
                                    label="Street"
                                    autoFocus
                                    {...register("address.street", {
                                        required: "This field is mandatory",
                                        minLength: { value: 2, message: "Too short" },
                                        maxLength: { value: 40, message: "Too long" },
                                    })}
                                />
                                {errors.phone && (
                                    <p className="text-red-500">{errors.phone?.message}</p>
                                )}
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="houseNumber"
                                    label="House Number"
                                    autoFocus
                                    {...register("address.houseNumber", {
                                        required: "This field is mandatory",
                                        minLength: { value: 1, message: "Too short" },
                                        maxLength: { value: 5, message: "Too long" },
                                    })}
                                />
                                {errors.phone && (
                                    <p className="text-red-500">{errors.phone?.message}</p>
                                )}
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="zip"
                                    label="zip"
                                    autoFocus
                                    {...register("address.zip", {
                                        required: "This field is mandatory",
                                        minLength: { value: 3, message: "Too short" },
                                        maxLength: { value: 20, message: "Too long" },
                                    })}
                                />
                                {errors.phone && (
                                    <p className="text-red-500">{errors.phone?.message}</p>
                                )}
                            </Grid>
                        </Grid>
                        <div className="items-center">
                            <Button
                                fullWidth
                                variant="contained"
                                sx={{ mt: 5, mb: 6, maxWidth: 250, ml: 3 }}

                                type="submit"
                            >
                                Submit
                            </Button>
                            <Button
                                fullWidth
                                variant="contained"
                                sx={{ mt: 5, mb: 6, maxWidth: 250, ml: 3 }}

                                type="submit"
                            >
                                Reset Credentials
                            </Button>
                            <Button
                                fullWidth
                                variant="contained"
                                sx={{ mt: 5, mb: 6, maxWidth: 250, ml: 3 }}
                                type="submit"
                            >
                                Cancel
                            </Button>
                        </div>
                        <DevTool control={control} />
                    </Box>
                </Box>
            </Container>
        </form >
    );
};

export default CreateCard;