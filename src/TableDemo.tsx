import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { PostService } from './service/PostService';


interface post {
    id: number;
    userId: number;
    title: string;
    body: string;
}

const TableDemo = () => {
    const [posts, setPosts] = useState<post[]>([]);


    useEffect(() => {
        PostService.getPosts().then((data: React.SetStateAction<post[]>) => setPosts(data));
    }, []);

    return (
        <div className='card'>
            <DataTable value={posts} showGridlines stripedRows paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]}
            >
                <Column field="userId" header="User Id"></Column>
                <Column field="id" header="Id"></Column>
                <Column field="title" header="Title"></Column>
                <Column field="body" header="Body"></Column>
            </DataTable>


        </div>
    )
}

export default TableDemo