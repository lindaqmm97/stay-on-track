import { Group } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import MODEL from './scene.glb';

class Land extends Group {
    constructor(parent) {
        // Call parent Group() constructor
        super();

        this.yPos = -20;
        this.movementSpeed = 0.075;

        const loader = new GLTFLoader();
        // const fbxLoader = new FBXLoader();


        this.name = 'land';

        loader.load(MODEL, (gltf) => {
            this.add(gltf.scene);
        });
        // fbxLoader.load(MODEL, (object)=>{
        //     this.add(object)
        // });
        this.position.y = this.yPos;
        this.position.z = -5;
        this.position.x = 0;
        this.scale.x = this.scale.y = this.scale.z = 2.5;
        this.rotation.y += Math.PI / 2;
        this.rotation.x -= Math.PI / 10;
        this.rotation.z += Math.PI / 10;

        // parent.addToUpdateList(this);
    }

    updatePosition() {
        let temp = this.position.z + this.movementSpeed;
        this.position.z = temp;
      }

    // update(timeStamp) {
    //     this.updatePosition();
    // }
}

export default Land;
