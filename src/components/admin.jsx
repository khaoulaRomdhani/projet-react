import React from 'react'

import Card from 'react-bootstrap/Card';
function Admin() {
    return (
        <div class="couleur-admin">
<h1>Administrateurs du site:</h1>
<section class="card d-flex justify-content-around">
<div class="row admin">
      <div class=" col-lg-4  ">
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://scontent.fnbe1-2.fna.fbcdn.net/v/t39.30808-6/336768773_1542992882879382_1848645604997797021_n.jpg?stp=c0.101.480.480a_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=L_ueVxDHP3QAX9sVcYn&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfB1QcAvDsq7U3jxWmX6gS6Br7ApkPTwe76IVbf_8-1BHQ&oe=642503CA" />
      <Card.Body>
        <Card.Title>Khaoula Romdhani</Card.Title>
        <Card.Text>
        <strong>Niveau :</strong>  2eme année de Licence.
   <strong> Section : </strong>systeme embarqué et iot.
<strong>Faculté :</strong>ISMAIK(institut superieure de math appliqué et informatique de kairouan) . 
        </Card.Text>
       
      </Card.Body>
    </Card>
    </div>
    <div class=" col-lg-4  ">
  
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://scontent.fnbe1-2.fna.fbcdn.net/v/t1.6435-9/110113418_923313951482005_404440772171626420_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_ohc=RMcjcH4GmbcAX-cnp7e&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfAC3bSeEiizPhwlSWL9wwllh7aU_j8VNgJGpy8kvZCYWQ&oe=64484AE1" />
      <Card.Body>
        <Card.Title>Yassine Maghraoui</Card.Title>
        <Card.Text>
        <strong>Niveau :</strong>  2eme année de Licence.
   <strong> Section : </strong>systeme embarqué et iot.
<strong>Faculté :</strong>ISMAIK(institut superieure de math appliqué et informatique de kairouan) . 
        </Card.Text>
       
      </Card.Body>
    </Card>
    </div>
    
    <div class=" col-lg-4  ">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://scontent.fnbe1-2.fna.fbcdn.net/v/t39.30808-6/316829979_1125125104838854_4826692427959011588_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=JgXWVXuGwikAX9u-wM9&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfDrDge04zAwabJPZq7Z8hFdqM41dutxJswiN94OdDhvag&oe=6425DD9B" />
      <Card.Body>
        <Card.Title>Mabrouka Massoudi</Card.Title>
        <Card.Text>
        <strong>Niveau :</strong>  2eme année de Licence.
   <strong> Section : </strong>systeme embarqué et iot.
<strong>Faculté :</strong>ISMAIK(institut superieure de math appliqué et informatique de kairouan) . 
        </Card.Text>
       
      </Card.Body>
    </Card>
    </div>
    </div>
        </section>
        </div>
    );
}
export default Admin;