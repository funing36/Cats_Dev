var createScene = function () {
    var scene = new BABYLON.Scene(engine);

	// Camera
    var camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 6, 150, BABYLON.Vector3.Zero(), scene);
	camera.attachControl(canvas, true);
	camera.minZ = 0.1;

	// Light
	var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
    light.intensity = 0.7;

	// Sphere
    var sphere = BABYLON.Mesh.CreateSphere("sphere1", 48, 30, scene);
	
	// Fur Material
	var furMaterial = new BABYLON.FurMaterial("fur", scene);
	furMaterial.furLength = 4;
    furMaterial.furAngle = 0;
    furMaterial.furColor = new BABYLON.Color3(0.99, 0.82, 0.82);
    furMaterial.diffuseTexture = new BABYLON.Texture("textures/fur.jpg", scene);
    furMaterial.furTexture = BABYLON.FurMaterial.GenerateTexture("furTexture", scene);
    furMaterial.furSpacing = 6;
    furMaterial.furDensity = 10;
    furMaterial.furSpeed = 200;
    furMaterial.furGravity = new BABYLON.Vector3(0, -1, 0);
		
	sphere.material = furMaterial;
	
	// Furify the sphere to create the high level fur effect
	// The first argument is sphere itself. The second represents
	// the quality of the effect
	var quality = 30;
	var shells = BABYLON.FurMaterial.FurifyMesh(sphere, quality);
	
    return scene;

};