import React from 'react'
import AdminSideNav from '../sidenav/AdminSideNav';
import Box from '@mui/material/Box';
import "../adminPages/AdminPages.css";
const AdminHome = () => {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <AdminSideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }} style={{ marginTop: "70px", marginLeft: "30px" }}>
          <div className='container'>
            <div className='row'>
              <div className='col-md-3'>
                <div className='AdminDashBoardCard1'>
                  <h4>Total Slider</h4>
                  <p>In the quiet dawn, nature unveils its masterpiece—the sunrise.
                    The sky blushes with hues of pink and gold, a canvas painted by
                    the hand of dawn itself.</p>
                </div>
              </div>
              <div className='col-md-3'>
                <div className='AdminDashBoardCard2'>
                  <h4>Total Awards</h4>
                  <p>In the quiet dawn, nature unveils its masterpiece—the sunrise.
                    The sky blushes with hues of pink and gold, a canvas painted by
                    the hand of dawn itself.</p>
                </div>
              </div>
              <div className='col-md-3'>
                <div className='AdminDashBoardCard3'>
                  <h4>Total Technology</h4>
                  <p>In the quiet dawn, nature unveils its masterpiece—the sunrise.
                    The sky blushes with hues of pink and gold, a canvas painted by
                    the hand of dawn itself.</p>
                </div>
              </div>
              <div className='col-md-3'>
                <div className='AdminDashBoardCard4'>
                  <h4>Total Slider</h4>
                  <p>In the quiet dawn, nature unveils its masterpiece—the sunrise.
                    The sky blushes with hues of pink and gold, a canvas painted by
                    the hand of dawn itself.</p>
                </div>
              </div>
            </div>
            {/* <div className='row mt-3'>
            <div className='col-md-4'>
              <div className='AdminDashBoardCard'>
                <h4>Total Slider</h4>  
                <p>In the quiet dawn, nature unveils its masterpiece—the sunrise.
                   The sky blushes with hues of pink and gold, a canvas painted by 
                   the hand of dawn itself.</p>
              </div>
            </div>
            <div className='col-md-4'>
            <div className='AdminDashBoardCard'>
                <h4>Total Awards</h4>  
                <p>In the quiet dawn, nature unveils its masterpiece—the sunrise.
                   The sky blushes with hues of pink and gold, a canvas painted by 
                   the hand of dawn itself.</p>
              </div>
            </div>
            <div className='col-md-4'>
            <div className='AdminDashBoardCard'>
                <h4>Total Technology</h4>  
                <p>In the quiet dawn, nature unveils its masterpiece—the sunrise.
                   The sky blushes with hues of pink and gold, a canvas painted by 
                   the hand of dawn itself.</p>
              </div>
        </div>
       </div>
        <div className='row mt-3'>
            <div className='col-md-4'>
              <div className='AdminDashBoardCard'>
                <h4>Total Slider</h4>  
                <p>In the quiet dawn, nature unveils its masterpiece—the sunrise.
                   The sky blushes with hues of pink and gold, a canvas painted by 
                   the hand of dawn itself.</p>
              </div>
            </div>
            <div className='col-md-4'>
            <div className='AdminDashBoardCard'>
                <h4>Total Awards</h4>  
                <p>In the quiet dawn, nature unveils its masterpiece—the sunrise.
                   The sky blushes with hues of pink and gold, a canvas painted by 
                   the hand of dawn itself.</p>
              </div>
            </div>
            <div className='col-md-4'>
            <div className='AdminDashBoardCard'>
                <h4>Total Technology</h4>  
                <p>In the quiet dawn, nature unveils its masterpiece—the sunrise.
                   The sky blushes with hues of pink and gold, a canvas painted by 
                   the hand of dawn itself.</p>
              </div>
        </div>
       </div> */}
          </div>
        </Box>
      </Box>
    </div>
  )
}


export default AdminHome