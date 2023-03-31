
import Button from 'react-bootstrap/Button';
import"../css/style.css"

function Home() {
    
      
  return (
    <div class="acc " >
    <div class="text-home col-sm-12">
    
            <h2>que des plats délicieux</h2>
            <p>tous nos conseils pour un faire de bon plat</p>
            <div class="button">
            <Button href="/connecter" variant="warning">se connecter</Button>{' '}
            <Button   href="/Inscription" id="lastnav"variant="outline-success">Inscription</Button>
             </div>
             </div>
           
          
</div>

 
 
  );
}

export default Home;