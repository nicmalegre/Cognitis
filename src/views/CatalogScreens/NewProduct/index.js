import React, { useState } from "react";
import CatalogLayout from '../../Layouts/CatalogLayout'
import FormNewProduct from '../../../components/CatologComponents/FormProduct/FormProduct';

import axios from "axios"; 


const NewProduct = (props) => {

    //This a function we use when te user click on "Add Image" button
    const buttonAddImageClick = () => {
        Array.prototype.forEach.call(document.querySelectorAll('.file-upload-button'), function(button){
            const hiddenInput = button.parentElement.querySelector('.file-upload-input');
            hiddenInput.click()
        })
    }

    const hiddenInputChange = () =>{
        Array.prototype.forEach.call(document.querySelectorAll('.file-upload-button'), function(button){
            const hiddenInput = button.parentElement.querySelector('.file-upload-input');
            const label = button.parentElement.querySelector('.file-upload-label');
            const filenameList = Array.prototype.map.call(hiddenInput.files, function (file){
                return file.name
            })

            label.textContent = filenameList.join(', ') || 'No file';
            label.title = label.textContent;

        })
        
    }

    

  return (
    <CatalogLayout>
       <FormNewProduct 
            hiddenInputChange={hiddenInputChange}
            buttonAddImageClick={buttonAddImageClick}
            
         />
    </CatalogLayout>
  );
};

export default NewProduct;
