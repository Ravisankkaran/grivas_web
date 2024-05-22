import React from 'react';
import './gallery.css';

const gallery: React.FC = () =>{
    return(
        <div className='gal'>
            <div className="container">
  <div className="gallery">
    <label className="panel-container">
      <div className="panel">
        <input className="panel-control" type="radio" name="panel-control" /><img className="panel-img" src="/assets/1.png" alt="#"/>
        <div className="panel-id">ID01</div>
        <div className="panel-content">
          <div className="head"> Smart Touch Switch</div> 
          <div className="value">
                <div className="name">*Capacitive Touch</div>
                <div className="name">- ཇོ་མོ་གླང་མ</div>
                <div className="name">- सगरमाथा</div>
                <div className="name">- 珠穆朗瑪峰</div>
              </div>     
        </div>
      </div>
    </label>
    <label className="panel-container">
      <div className="panel">
        <input className="panel-control" type="radio" name="panel-control"/><img className="panel-img" src="/assets/2.jpg" alt="*"/>
        <div className="panel-id">MT02</div>
        <div className="panel-content">
          <div className="head">K2</div>
          
        </div>
      </div>
    </label>
    <label className="panel-container">
      <div className="panel">
        <input className="panel-control" type="radio" name="panel-control"/><img className="panel-img" src="/assets/3.jpg" alt="*"/>
        <div className="panel-id">MT03</div>
        <div className="panel-content">
          <div className="head">कञ्चनजङ्घा</div>
        </div>
      </div>
    </label>
    <label className="panel-container">
      <div className="panel">
        <input className="panel-control" type="radio" name="panel-control"/><img className="panel-img" src="/assets/4.jpg" alt="ल्होत्से"/>
        <div className="panel-id">MT04</div>
        <div className="panel-content">
          <div className="head">ल्होत्से</div>
        </div>
      </div>
    </label>
    <label className="panel-container">
      <div className="panel">
        <input className="panel-control" type="radio" name="panel-control"/><img className="panel-img" src="/assets/5.jpg" alt="मकालु हिमाल"/>
        <div className="panel-id">MT05</div>
        <div className="panel-content">
          <div className="head">मकालु हिमाल</div>
        </div>
      </div>
    </label>
    <label className="panel-container">
      <div className="panel">
        <input className="panel-control" type="radio" name="panel-control"/><img className="panel-img" src="/assets/6.jpg" alt="मकालु हिमाल"/>
        <div className="panel-id">MT05</div>
        <div className="panel-content">
          <div className="head">मकालु हिमाल</div>
          
        </div>
      </div>
    </label>
  </div>
</div>
  
        </div>
    );
}
export default gallery;