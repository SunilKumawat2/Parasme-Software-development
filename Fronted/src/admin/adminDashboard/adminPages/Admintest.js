import React ,{useState}from 'react'
import Box from '@mui/material/Box';
import AdminSideNav from '../sidenav/AdminSideNav';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const AdminTest = () => {
    const [editorContent, setEditorContent] = useState('');

    const handleEditorChange = (content) => {
        setEditorContent(content);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission with the editor content
    };
    return (
        <div>
            <Box sx={{ display: "flex" }}>
                <AdminSideNav />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }} style={{
                    marginTop: "70px",
                    marginLeft: "30px"
                }}>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Editor:</label>
                            <ReactQuill value={editorContent} onChange={handleEditorChange} />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </Box>
            </Box>
        </div>
    )
}

export default AdminTest