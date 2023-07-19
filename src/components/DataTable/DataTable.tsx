
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridRowSelectionModel } from '@mui/x-data-grid';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@mui/material';


import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks';
import { CarForm } from '../CarForm';


const columns: GridColDef[] = [
    {field: 'id', headerName: 'ID', width: 90},
    {
        field: 'make',
        headerName: 'Make',
        width: 150,
        editable: true
    },
    {
        field: 'model',
        headerName: 'Model',
        width: 150
    },
    {
        field: 'year',
        headerName: 'Year',
        width: 150
    },
    {
        field: 'color',
        headerName: 'Color',
        width: 150
    },
    {
        field: 'max_speed',
        headerName: 'Max Speed',
        width: 150
    }
];

export const DataTable = () => {
    const { carData, getData } = useGetData()
    const [ open, setOpen ] = useState(false)
    const [ gridData, setData ] = useState<GridRowSelectionModel>([])

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        serverCalls.delete(`${gridData[0]}`)
        getData()
    }

    useEffect(() => {
        console.log(carData)
    }, [carData])

    return (
        <Box sx={{height: 400, width: '100%'}}>
            <DataGrid
            rows={carData}
            columns={columns}
            initialState={{
                pagination: {
                    paginationModel: {
                        pageSize: 5
                    }
                }
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            onRowSelectionModelChange={(newSelectionModel) => setData(newSelectionModel)}
            />
            <Button onClick={handleOpen}>Update</Button>
            <Button variant='contained' color='warning' onClick={deleteData}>Delete</Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
                <DialogTitle id='form-dialog-title'>Update A Vehicle</DialogTitle>
                <DialogContent>
                    <DialogContentText>Vehicle id: {gridData[0]}</DialogContentText>
                    <CarForm id={`${gridData}`} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color='error'>Cancel</Button>
                </DialogActions>
            </Dialog>
        </Box>
    )
}