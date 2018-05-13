import React from "react";
import style from "./essential_wth_style.css"
let THREE = require('three');

class EssentialWeather extends React.Component{
  componentDidMount(){
    // Set the scene size.
    const WIDTH = window.outerWidth;
    const HEIGHT = 300;

    // Set some camera attributes.
    const VIEW_ANGLE = 45;
    const ASPECT = WIDTH / HEIGHT;
    const NEAR = 0.1;
    const FAR = 10000;
    let sun;

    // Get the DOM element to attach to
    const container =
        document.querySelector('#essential-wth');

    // Create a WebGL renderer, camera
    // and a scene
    const renderer = new THREE.WebGLRenderer({alpha:true});
    const camera =
        new THREE.PerspectiveCamera(
            VIEW_ANGLE,
            ASPECT,
            NEAR,
            FAR
        );

    const scene = new THREE.Scene();

    // Add the camera to the scene.
    scene.add(camera);

    // Start the renderer.
    renderer.setSize(WIDTH, HEIGHT);

    // Attach the renderer-supplied
    // DOM element.
    container.appendChild(renderer.domElement);

    function drawSun() {
      const sunSize = 130;
      const sunGeometry = new THREE.IcosahedronGeometry(sunSize, 1);
      const sunMaterial = new THREE.MeshPhongMaterial({
          color: 0xffd927,
          shading: THREE.FlatShading
      });
  
      sun = new THREE.Mesh(sunGeometry, sunMaterial);
  
      sun.castShadow = true;
      sun.receiveShadow = true;
      sun.position.z = -800;
      sun.position.y = 150;
      sun.position.x = 150;
      scene.add(sun);
    }

    const ambientLight = new THREE.AmbientLight();
    scene.add(ambientLight);

    const shadowLight = new THREE.DirectionalLight(0xfff, 0.8);
    shadowLight.position.set(200, 200, 200);
    shadowLight.castShadow = true;
    scene.add(shadowLight);

    const light = new THREE.DirectionalLight();
    light.position.set(200, 100, 200);
    light.castShadow = true;
    scene.add(light);

    function render() {
      sun.rotation.y += 0.005;
      renderer.render(scene, camera);
    }

    function update () {
      // Draw!
      render()
    
      // Schedule the next frame.
      requestAnimationFrame(update);
    }
    drawSun()
    // Schedule the first frame.
    requestAnimationFrame(update);
  }

  render(){
    return <div id="essential-wth">
      <div id="essential-wth-text">
        <h1 id="essential-wth-temp">{this.props.temp}°C</h1>
        <h4>{this.props.clouds}% &#x2601;</h4> 
      </div>
    </div>
  }
}

EssentialWeather.defalutProps = {
  temp : 17,
  clouds: 55
}

export default EssentialWeather;