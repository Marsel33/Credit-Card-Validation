import { Button, Grid, Paper, TextField } from '@material-ui/core';
import useStyles from './styles';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { object, number, string } from 'yup';
import { useDispatch } from 'react-redux';
import { createPost } from '../../redux/actions/posts';
import { useState } from 'react';


const schema = object({
    cardNumber: string().matches(/^[0-9]{16}$/, "Card number must consist of 16 digits").required(),
    expirationDate: string().matches(/\d{2}(\/)\d{4}/, "The date must be of format MM/YYYY").required(),
    cvv: string().matches(/^[0-9]{3}$/, "CVV must consist of 3 digits").required(),
    amount: number().typeError('The amount must be a number').required(),
}) 

const ValidationForm = () => { 
  
    const [postData, setPostData] = useState({
        cardNumber: '',
        expirationDate: '',
        cvv: '',
        amount:'',
    })

    const dispatch = useDispatch();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),  
    })

    const onSubmit = (data, e) => {
        e.preventDefault();
        dispatch(createPost(postData));
        alert('The transfer has been successfully made!')        
    };

    const classes = useStyles();   
    
    const clear = () => {
        setPostData({
            cardNumber: '',
            expirationDate: '',
            cvv: '',
            amount:'',
        })
    }

    return (
        <Paper className={classes.paper}>            

            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField name="cardNumber" fullWidth variant="outlined" label="Card Number" placeholder="Card Number" {...register('cardNumber', { required: true })} value={postData.cardNumber} onChange={(e) => setPostData({ ...postData, cardNumber: e.target.value })} />  
                
                <p className={classes.text}>{errors?.cardNumber?.message}</p>
                               
                    <TextField name="expirationDate" fullWidth variant="outlined" label="Expiration Date" placeholder="MM/YYYY" {...register('expirationDate', { required: true })} value={postData.expirationDate} onChange={(e) => setPostData({ ...postData, expirationDate: e.target.value })} />
                
                <p className={classes.text}>{errors?.expirationDate?.message}</p>
                
                    <TextField name="cvv" fullWidth variant="outlined" label="CVV" placeholder="CVV" type="password" {...register('cvv', { required: true })} value={postData.cvv} onChange={(e) => setPostData({ ...postData, cvv: e.target.value })} /> 
                
                <p className={classes.text}>{errors?.cvv?.message}</p>
                
                    <TextField name="amount" fullWidth variant="outlined" label="Amount" placeholder="Amount" type="text" {...register('amount', { required: true })} value={postData.amount} onChange={(e) => setPostData({ ...postData, amount: e.target.value })} /> 
                
                <p className={classes.text}>{errors?.amount?.message}</p>
                <Grid container justifyContent="space-between" >
                    <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit">Submit</Button>
                    <Button onClick={clear} className={classes.buttonSubmit} variant="contained" color="secondary" size="large">Clear</Button>
                </Grid>
            </form> 

        </Paper>
        
    );
}

export default ValidationForm;