
var ptGeo = new THREE.PlaneGeometry(10,20,10,10);

var txtPiso = new THREE.TextureLoader();
var pisoTxt = new txtPiso.load("img/piso.png");
var piso = new THREE.Mesh(
    ptGeo,
    new THREE.MeshBasicMaterial({color:0xffffff, map:pisoTxt}));
piso.rotation.x = -Math.PI/2;
piso.rotation.z = Math.PI/2;
piso.position.y = -2;      

var txtTicho = new THREE.TextureLoader();
var tichoTxt = new txtTicho.load("img/techo.png");
var ticho = new THREE.Mesh(
    ptGeo,
    new THREE.MeshBasicMaterial({color:0xffffff, map:tichoTxt}));
ticho.rotation.x = Math.PI/2;
ticho.rotation.z = Math.PI/2;
ticho.position.y = 1.5;

var paGeo = new THREE.PlaneGeometry(20, 3.5);
var txtPared = new THREE.TextureLoader();
var paredTxt = new txtPared.load("img/pared.png");
var paMat = new THREE.MeshBasicMaterial({color:0xffffff, map:paredTxt});

var pared1 = new THREE.Mesh(paGeo, paMat);
pared1.position.set(0, -0.25, -5);
var pared2 = new THREE.Mesh(paGeo, paMat);
pared2.position.set(0, -0.25, 5);
pared2.rotation.y = Math.PI;

var pbGeo = new THREE.PlaneGeometry(10, 3.5);
var txtParedb = new THREE.TextureLoader();
var paredbTxt = new txtParedb.load("img/paredb.png");
var pbMat = new THREE.MeshBasicMaterial({color:0xffffff, map:paredbTxt});

var pared3 = new THREE.Mesh(pbGeo, pbMat);
pared3.position.set(10, -0.25, 0);
pared3.rotation.y = -Math.PI/2;
var pared4 = new THREE.Mesh(pbGeo, pbMat);
pared4.position.set(-10, -0.25, 0);
pared4.rotation.y = Math.PI/2;

scene.add(piso, ticho, pared1, pared2, pared3, pared4);

//cuadro 1
var txt1 = new THREE.TextureLoader().load("img/cuadros/1.jpg");
var cdr1 = new THREE.Mesh(
    new THREE.PlaneGeometry(795/1000,880/1000),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txt1})
);
//borde cuadro 1
var cdrB1 = new THREE.Mesh(
    new THREE.BoxGeometry(795/1000,880/1000,0.05,0),
    new THREE.MeshBasicMaterial({color:0x232117})
);
cdr1.position.set((1*2)-10.5,0,-4.9);
cdrB1.position.set((1*2)-10.5,0,-4.925);
scene.add(cdr1,cdrB1);
//etiqueta 1
var txq1 = new THREE.TextureLoader().load("img/etiq/e1.jpg");
var etq1 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.405,0.166),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txq1})
);
etq1.position.set((1*2)-10.6+0.9,0,-4.99);
scene.add(etq1);

//cuadro 2
var txt2 = new THREE.TextureLoader().load("img/cuadros/2.jpg");
var cdr2 = new THREE.Mesh(
    new THREE.PlaneGeometry(637/1000,950/1000),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txt2})
);
//borde cuadro 2
var cdrB2 = new THREE.Mesh(
    new THREE.BoxGeometry(637/1000,950/1000,0.05,0),
    new THREE.MeshBasicMaterial({color:0x232117})
);
cdr2.position.set((2*2)-10.5,0,-4.9);
cdrB2.position.set((2*2)-10.5,0,-4.925);
scene.add(cdr2,cdrB2);
//etiqueta 2
var txq2 = new THREE.TextureLoader().load("img/etiq/e2.jpg");
var etq2 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.405,0.166),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txq2})
);
etq2.position.set((2*2)-10.6+0.9,0,-4.99);
scene.add(etq2);

//cuadro 3
var txt3 = new THREE.TextureLoader().load("img/cuadros/3.jpg");
var cdr3 = new THREE.Mesh(
    new THREE.PlaneGeometry(667/1000,900/1000),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txt3})
);
//borde cuadro 3
var cdrB3 = new THREE.Mesh(
    new THREE.BoxGeometry(667/1000,900/1000,0.05,0),
    new THREE.MeshBasicMaterial({color:0x232117})
);
cdr3.position.set((3*2)-10.5,0,-4.9);
cdrB3.position.set((3*2)-10.5,0,-4.925);
scene.add(cdr3,cdrB3);
//etiqueta 3
var txq3 = new THREE.TextureLoader().load("img/etiq/e3.jpg");
var etq3 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.405,0.166),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txq3})
);
etq3.position.set((3*2)-10.6+0.9,0,-4.99);
scene.add(etq3);

//cuadro 4
var txt4 = new THREE.TextureLoader().load("img/cuadros/4.jpg");
var cdr4 = new THREE.Mesh(
    new THREE.PlaneGeometry(1058/1000,949/1000),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txt4})
);
//borde cuadro 4
var cdrB4 = new THREE.Mesh(
    new THREE.BoxGeometry(1058/1000,949/1000,0.05,0),
    new THREE.MeshBasicMaterial({color:0x232117})
);
cdr4.position.set((4*2)-10.5,0,-4.9);
cdrB4.position.set((4*2)-10.5,0,-4.925);
scene.add(cdr4,cdrB4);
//etiqueta 4
var txq4 = new THREE.TextureLoader().load("img/etiq/e4.jpg");
var etq4 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.405,0.166),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txq4})
);
etq4.position.set((4*2)-10.6+0.9,0,-4.99);
scene.add(etq4);

//cuadro 5
var txt5 = new THREE.TextureLoader().load("img/cuadros/5.jpg");
var cdr5 = new THREE.Mesh(
    new THREE.PlaneGeometry(1722/1000,437/1000),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txt5})
);
//borde cuadro 5
var cdrB5 = new THREE.Mesh(
    new THREE.BoxGeometry(1722/1000,437/1000,0.05,0),
    new THREE.MeshBasicMaterial({color:0x232117})
);
cdr5.position.set((5*2)-10.5,0,-4.9);
cdrB5.position.set((5*2)-10.5,0,-4.925);
scene.add(cdr5,cdrB5);
//etiqueta 5
var txq5 = new THREE.TextureLoader().load("img/etiq/e5.jpg");
var etq5 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.405,0.166),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txq5})
);
etq5.position.set((5*2)-10.6+0.9,0,-4.99);
scene.add(etq5);

//cuadro 6
var txt6 = new THREE.TextureLoader().load("img/cuadros/6.jpg");
var cdr6 = new THREE.Mesh(
    new THREE.PlaneGeometry(773/1000,1120/1000),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txt6})
);
//borde cuadro 6
var cdrB6 = new THREE.Mesh(
    new THREE.BoxGeometry(773/1000,1120/1000,0.05,0),
    new THREE.MeshBasicMaterial({color:0x232117})
);
cdr6.position.set((6*2)-10.5,0,-4.9);
cdrB6.position.set((6*2)-10.5,0,-4.925);
scene.add(cdr6,cdrB6);
//etiqueta 6
var txq6 = new THREE.TextureLoader().load("img/etiq/e6.jpg");
var etq6 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.405,0.166),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txq6})
);
etq6.position.set((6*2)-10.6+0.9,0,-4.99);
scene.add(etq6);

//cuadro 7
var txt7 = new THREE.TextureLoader().load("img/cuadros/7.jpg");
var cdr7 = new THREE.Mesh(
    new THREE.PlaneGeometry(772/1000,1052/1000),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txt7})
);
//borde cuadro 7
var cdrB7 = new THREE.Mesh(
    new THREE.BoxGeometry(772/1000,1052/1000,0.05,0),
    new THREE.MeshBasicMaterial({color:0x232117})
);
cdr7.position.set((7*2)-10.5,0,-4.9);
cdrB7.position.set((7*2)-10.5,0,-4.925);
scene.add(cdr7,cdrB7);
//etiqueta 7
var txq7 = new THREE.TextureLoader().load("img/etiq/e7.jpg");
var etq7 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.405,0.166),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txq7})
);
etq7.position.set((7*2)-10.6+0.9,0,-4.99);
scene.add(etq7);

//cuadro 8
var txt8 = new THREE.TextureLoader().load("img/cuadros/8.jpg");
var cdr8 = new THREE.Mesh(
    new THREE.PlaneGeometry(1079/1000,807/1000),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txt8})
);
//borde cuadro 8
var cdrB8 = new THREE.Mesh(
    new THREE.BoxGeometry(1079/1000,807/1000,0.05,0),
    new THREE.MeshBasicMaterial({color:0x232117})
);
cdr8.position.set((8*2)-10.5,0,-4.9);
cdrB8.position.set((8*2)-10.5,0,-4.925);
scene.add(cdr8,cdrB8);
//etiqueta 8
var txq8 = new THREE.TextureLoader().load("img/etiq/e8.jpg");
var etq8 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.405,0.166),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txq8})
);
etq8.position.set((8*2)-10.6+0.9,0,-4.99);
scene.add(etq8);

//cuadro 9
var txt9 = new THREE.TextureLoader().load("img/cuadros/9.jpg");
var cdr9 = new THREE.Mesh(
    new THREE.PlaneGeometry(1061/1000,857/1000),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txt9})
);
//borde cuadro 9
var cdrB9 = new THREE.Mesh(
    new THREE.BoxGeometry(1061/1000,857/1000,0.05,0),
    new THREE.MeshBasicMaterial({color:0x232117})
);
cdr9.position.set((9*2)-10.5,0,-4.9);
cdrB9.position.set((9*2)-10.5,0,-4.925);
scene.add(cdr9,cdrB9);
//etiqueta 9
var txq9 = new THREE.TextureLoader().load("img/etiq/e9.jpg");
var etq9 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.405,0.166),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txq9})
);
etq9.position.set((9*2)-10.6+0.9,0,-4.99);
scene.add(etq9);

//cuadro 10
var txt10 = new THREE.TextureLoader().load("img/cuadros/10.jpg");
var cdr10 = new THREE.Mesh(
    new THREE.PlaneGeometry(686/1000,866/1000),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txt10})
);
//borde cuadro 10
var cdrB10 = new THREE.Mesh(
    new THREE.BoxGeometry(686/1000,866/1000,0.05,0),
    new THREE.MeshBasicMaterial({color:0x232117})
);
cdr10.position.set(9.9,0,((10-9)*2)-6);
cdr10.rotation.y -= Math.PI/2;
cdrB10.position.set(9.925,0,((10-9)*2)-6);
cdrB10.rotation.y -= Math.PI/2;
scene.add(cdr10,cdrB10);
//etiqueta 10
var txq10 = new THREE.TextureLoader().load("img/etiq/e10.jpg");
var etq10 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.405,0.166),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txq10})
);
etq10.position.set(9.99,0,((10-9)*2)-5.2);
etq10.rotation.y -= Math.PI/2;
scene.add(etq10);

//cuadro 11
var txt11 = new THREE.TextureLoader().load("img/cuadros/11.jpg");
var cdr11 = new THREE.Mesh(
    new THREE.PlaneGeometry(1000/1000,716/1000),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txt11})
);
//borde cuadro 11
var cdrB11 = new THREE.Mesh(
    new THREE.BoxGeometry(1000/1000,716/1000,0.05,0),
    new THREE.MeshBasicMaterial({color:0x232117})
);
cdr11.position.set(9.9,0,((11-9)*2)-6);
cdr11.rotation.y -= Math.PI/2;
cdrB11.position.set(9.925,0,((11-9)*2)-6);
cdrB11.rotation.y -= Math.PI/2;
scene.add(cdr11,cdrB11);
//etiqueta 11
var txq11 = new THREE.TextureLoader().load("img/etiq/e11.jpg");
var etq11 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.405,0.166),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txq11})
);
etq11.position.set(9.99,0,((11-9)*2)-5.2);
etq11.rotation.y -= Math.PI/2;
scene.add(etq11);

//cuadro 12
var txt12 = new THREE.TextureLoader().load("img/cuadros/12.jpg");
var cdr12 = new THREE.Mesh(
    new THREE.PlaneGeometry(624/1000,832/1000),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txt12})
);
//borde cuadro 12
var cdrB12 = new THREE.Mesh(
    new THREE.BoxGeometry(624/1000,832/1000,0.05,0),
    new THREE.MeshBasicMaterial({color:0x232117})
);
cdr12.position.set(9.9,0,((12-9)*2)-6);
cdr12.rotation.y -= Math.PI/2;
cdrB12.position.set(9.925,0,((12-9)*2)-6);
cdrB12.rotation.y -= Math.PI/2;
scene.add(cdr12,cdrB12);
//etiqueta 12
var txq12 = new THREE.TextureLoader().load("img/etiq/e12.jpg");
var etq12 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.405,0.166),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txq12})
);
etq12.position.set(9.99,0,((12-9)*2)-5.2);
etq12.rotation.y -= Math.PI/2;
scene.add(etq12);

//cuadro 13
var txt13 = new THREE.TextureLoader().load("img/cuadros/13.jpg");
var cdr13 = new THREE.Mesh(
    new THREE.PlaneGeometry(780/1000,1050/1000),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txt13})
);
//borde cuadro 13
var cdrB13 = new THREE.Mesh(
    new THREE.BoxGeometry(780/1000,1050/1000,0.05,0),
    new THREE.MeshBasicMaterial({color:0x232117})
);
cdr13.position.set(9.9,0,((13-9)*2)-6);
cdr13.rotation.y -= Math.PI/2;
cdrB13.position.set(9.925,0,((13-9)*2)-6);
cdrB13.rotation.y -= Math.PI/2;
scene.add(cdr13,cdrB13);
//etiqueta 13
var txq13 = new THREE.TextureLoader().load("img/etiq/e13.jpg");
var etq13 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.405,0.166),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txq13})
);
etq13.position.set(9.99,0,((13-9)*2)-5.2);
etq13.rotation.y -= Math.PI/2;
scene.add(etq13);

//cuadro 14
var txt14 = new THREE.TextureLoader().load("img/cuadros/14.jpg");
var cdr14 = new THREE.Mesh(
    new THREE.PlaneGeometry(1058/1000,838/1000),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txt14})
);
//borde cuadro 14
var cdrB14 = new THREE.Mesh(
    new THREE.BoxGeometry(1058/1000,838/1000,0.05,0),
    new THREE.MeshBasicMaterial({color:0x232117})
);
cdr14.position.set(9.9,0,((14-9)*2)-6);
cdr14.rotation.y -= Math.PI/2;
cdrB14.position.set(9.925,0,((14-9)*2)-6);
cdrB14.rotation.y -= Math.PI/2;
scene.add(cdr14,cdrB14);
//etiqueta 14
var txq14 = new THREE.TextureLoader().load("img/etiq/e14.jpg");
var etq14 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.405,0.166),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txq14})
);
etq14.position.set(9.99,0,((14-9)*2)-5.2);
etq14.rotation.y -= Math.PI/2;
scene.add(etq14);

//cuadro 15
var txt15 = new THREE.TextureLoader().load("img/cuadros/15.jpg");
var cdr15 = new THREE.Mesh(
    new THREE.PlaneGeometry(922/1000,552/1000),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txt15})
);
//borde cuadro 15
var cdrB15 = new THREE.Mesh(
    new THREE.BoxGeometry(922/1000,552/1000,0.05,0),
    new THREE.MeshBasicMaterial({color:0x232117})
);
cdr15.position.set(10-((15-14)*2),0,4.9);
cdr15.rotation.y += Math.PI;
cdrB15.position.set(10-((15-14)*2),0,4.925);
cdrB15.rotation.y += Math.PI;
scene.add(cdr15,cdrB15);
//etiqueta 15
var txq15 = new THREE.TextureLoader().load("img/etiq/e15.jpg");
var etq15 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.405,0.166),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txq15})
);
etq15.position.set(9.3-((15-14)*2),0,4.99);
etq15.rotation.y += Math.PI;
scene.add(etq15);

//cuadro 16
var txt16 = new THREE.TextureLoader().load("img/cuadros/16.jpg");
var cdr16 = new THREE.Mesh(
    new THREE.PlaneGeometry(795/1000,991/1000),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txt16})
);
//borde cuadro 16
var cdrB16 = new THREE.Mesh(
    new THREE.BoxGeometry(795/1000,991/1000,0.05,0),
    new THREE.MeshBasicMaterial({color:0x232117})
);
cdr16.position.set(10-((16-14)*2),0,4.9);
cdr16.rotation.y += Math.PI;
cdrB16.position.set(10-((16-14)*2),0,4.925);
cdrB16.rotation.y += Math.PI;
scene.add(cdr16,cdrB16);
//etiqueta 16
var txq16 = new THREE.TextureLoader().load("img/etiq/e16.jpg");
var etq16 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.405,0.166),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txq16})
);
etq16.position.set(9.3-((16-14)*2),0,4.99);
etq16.rotation.y += Math.PI;
scene.add(etq16);

//cuadro 17
var txt17 = new THREE.TextureLoader().load("img/cuadros/17.jpg");
var cdr17 = new THREE.Mesh(
    new THREE.PlaneGeometry(747/1000,1292/1000),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txt17})
);
//borde cuadro 17
var cdrB17 = new THREE.Mesh(
    new THREE.BoxGeometry(747/1000,1292/1000,0.05,0),
    new THREE.MeshBasicMaterial({color:0x232117})
);
cdr17.position.set(10-((17-14)*2),0,4.9);
cdr17.rotation.y += Math.PI;
cdrB17.position.set(10-((17-14)*2),0,4.925);
cdrB17.rotation.y += Math.PI;
scene.add(cdr17,cdrB17);
//etiqueta 17
var txq17 = new THREE.TextureLoader().load("img/etiq/e17.jpg");
var etq17 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.405,0.166),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txq17})
);
etq17.position.set(9.3-((17-14)*2),0,4.99);
etq17.rotation.y += Math.PI;
scene.add(etq17);

//cuadro 18
var txt18 = new THREE.TextureLoader().load("img/cuadros/18.jpg");
var cdr18 = new THREE.Mesh(
    new THREE.PlaneGeometry(942/1000,719/1000),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txt18})
);
//borde cuadro 18
var cdrB18 = new THREE.Mesh(
    new THREE.BoxGeometry(942/1000,719/1000,0.05,0),
    new THREE.MeshBasicMaterial({color:0x232117})
);
cdr18.position.set(10-((18-14)*2),0,4.9);
cdr18.rotation.y += Math.PI;
cdrB18.position.set(10-((18-14)*2),0,4.925);
cdrB18.rotation.y += Math.PI;
scene.add(cdr18,cdrB18);
//etiqueta 18
var txq18 = new THREE.TextureLoader().load("img/etiq/e18.jpg");
var etq18 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.405,0.166),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txq18})
);
etq18.position.set(9.3-((18-14)*2),0,4.99);
etq18.rotation.y += Math.PI;
scene.add(etq18);

//cuadro 19
var txt19 = new THREE.TextureLoader().load("img/cuadros/19.jpg");
var cdr19 = new THREE.Mesh(
    new THREE.PlaneGeometry(781/1000,1072/1000),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txt19})
);
//borde cuadro 19
var cdrB19 = new THREE.Mesh(
    new THREE.BoxGeometry(781/1000,1072/1000,0.05,0),
    new THREE.MeshBasicMaterial({color:0x232117})
);
cdr19.position.set(10-((19-14)*2),0,4.9);
cdr19.rotation.y += Math.PI;
cdrB19.position.set(10-((19-14)*2),0,4.925);
cdrB19.rotation.y += Math.PI;
scene.add(cdr19,cdrB19);
//etiqueta 19
var txq19 = new THREE.TextureLoader().load("img/etiq/e19.jpg");
var etq19 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.405,0.166),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txq19})
);
etq19.position.set(9.3-((19-14)*2),0,4.99);
etq19.rotation.y += Math.PI;
scene.add(etq19);

//cuadro 20
var txt20 = new THREE.TextureLoader().load("img/cuadros/20.jpg");
var cdr20 = new THREE.Mesh(
    new THREE.PlaneGeometry(1010/1000,757/1000),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txt20})
);
//borde cuadro 20
var cdrB20 = new THREE.Mesh(
    new THREE.BoxGeometry(1010/1000,757/1000,0.05,0),
    new THREE.MeshBasicMaterial({color:0x232117})
);
cdr20.position.set(10-((20-14)*2),0,4.9);
cdr20.rotation.y += Math.PI;
cdrB20.position.set(10-((20-14)*2),0,4.925);
cdrB20.rotation.y += Math.PI;
scene.add(cdr20,cdrB20);
//etiqueta 20
var txq20 = new THREE.TextureLoader().load("img/etiq/e20.jpg");
var etq20 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.405,0.166),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txq20})
);
etq20.position.set(9.3-((20-14)*2),0,4.99);
etq20.rotation.y += Math.PI;
scene.add(etq20);

//cuadro 21
var txt21 = new THREE.TextureLoader().load("img/cuadros/21.jpg");
var cdr21 = new THREE.Mesh(
    new THREE.PlaneGeometry(684/1000,928/1000),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txt21})
);
//borde cuadro 21
var cdrB21 = new THREE.Mesh(
    new THREE.BoxGeometry(684/1000,928/1000,0.05,0),
    new THREE.MeshBasicMaterial({color:0x232117})
);
cdr21.position.set(10-((21-14)*2),0,4.9);
cdr21.rotation.y += Math.PI;
cdrB21.position.set(10-((21-14)*2),0,4.925);
cdrB21.rotation.y += Math.PI;
scene.add(cdr21,cdrB21);
//etiqueta 21
var txq21 = new THREE.TextureLoader().load("img/etiq/e21.jpg");
var etq21 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.405,0.166),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txq21})
);
etq21.position.set(9.3-((21-14)*2),0,4.99);
etq21.rotation.y += Math.PI;
scene.add(etq21);

//cuadro 22
var txt22 = new THREE.TextureLoader().load("img/cuadros/22.jpg");
var cdr22 = new THREE.Mesh(
    new THREE.PlaneGeometry(768/1000,1080/1000),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txt22})
);
//borde cuadro 22
var cdrB22 = new THREE.Mesh(
    new THREE.BoxGeometry(768/1000,1080/1000,0.05,0),
    new THREE.MeshBasicMaterial({color:0x232117})
);
cdr22.position.set(10-((22-14)*2),0,4.9);
cdr22.rotation.y += Math.PI;
cdrB22.position.set(10-((22-14)*2),0,4.925);
cdrB22.rotation.y += Math.PI;
scene.add(cdr22,cdrB22);
//etiqueta 22
var txq22 = new THREE.TextureLoader().load("img/etiq/e22.jpg");
var etq22 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.405,0.166),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txq22})
);
etq22.position.set(9.3-((22-14)*2),0,4.99);
etq22.rotation.y += Math.PI;
scene.add(etq22);

//cuadro 23
var txt23 = new THREE.TextureLoader().load("img/cuadros/23.jpg");
var cdr23 = new THREE.Mesh(
    new THREE.PlaneGeometry(845/1000,1041/1000),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txt23})
);
//borde cuadro 23
var cdrB23 = new THREE.Mesh(
    new THREE.BoxGeometry(845/1000,1041/1000,0.05,0),
    new THREE.MeshBasicMaterial({color:0x232117})
);
cdr23.position.set(10-((23-14)*2),0,4.9);
cdr23.rotation.y += Math.PI;
cdrB23.position.set(10-((23-14)*2),0,4.925);
cdrB23.rotation.y += Math.PI;
scene.add(cdr23,cdrB23);
//etiqueta 23
var txq23 = new THREE.TextureLoader().load("img/etiq/e23.jpg");
var etq23 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.405,0.166),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txq23})
);
etq23.position.set(9.3-((23-14)*2),0,4.99);
etq23.rotation.y += Math.PI;
scene.add(etq23);

//cuadro 24
var txt24 = new THREE.TextureLoader().load("img/cuadros/24.jpg");
var cdr24 = new THREE.Mesh(
    new THREE.PlaneGeometry(562/1000,795/1000),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txt24})
);
//borde cuadro 24
var cdrB24 = new THREE.Mesh(
    new THREE.BoxGeometry(562/1000,795/1000,0.05,0),
    new THREE.MeshBasicMaterial({color:0x232117})
);
cdr24.position.set(-9.9,0,6-((24-23)*2));
cdr24.rotation.y += Math.PI/2;
cdrB24.position.set(-9.925,0,6-((24-23)*2));
cdrB24.rotation.y += Math.PI/2;
scene.add(cdr24,cdrB24);
//etiqueta 24
var txq24 = new THREE.TextureLoader().load("img/etiq/e24.jpg");
var etq24 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.405,0.166),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txq24})
);
etq24.position.set(-9.99,0,5.2-((24-23)*2));
etq24.rotation.y += Math.PI/2;
scene.add(etq24);

//cuadro 25
var txt25 = new THREE.TextureLoader().load("img/cuadros/25.jpg");
var cdr25 = new THREE.Mesh(
    new THREE.PlaneGeometry(352/1000,590/1000),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txt25})
);
//borde cuadro 25
var cdrB25 = new THREE.Mesh(
    new THREE.BoxGeometry(352/1000,590/1000,0.05,0),
    new THREE.MeshBasicMaterial({color:0x232117})
);
cdr25.position.set(-9.9,0,6-((25-23)*2));
cdr25.rotation.y += Math.PI/2;
cdrB25.position.set(-9.925,0,6-((25-23)*2));
cdrB25.rotation.y += Math.PI/2;
scene.add(cdr25,cdrB25);
//etiqueta 25
var txq25 = new THREE.TextureLoader().load("img/etiq/e25.jpg");
var etq25 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.405,0.166),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txq25})
);
etq25.position.set(-9.99,0,5.2-((25-23)*2));
etq25.rotation.y += Math.PI/2;
scene.add(etq25);

//cuadro 26
var txt26 = new THREE.TextureLoader().load("img/cuadros/26.jpg");
var cdr26 = new THREE.Mesh(
    new THREE.PlaneGeometry(976/1000,1280/1000),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txt26})
);
//borde cuadro 26
var cdrB26 = new THREE.Mesh(
    new THREE.BoxGeometry(976/1000,1280/1000,0.05,0),
    new THREE.MeshBasicMaterial({color:0x232117})
);
cdr26.position.set(-9.9,0,6-((26-23)*2));
cdr26.rotation.y += Math.PI/2;
cdrB26.position.set(-9.925,0,6-((26-23)*2));
cdrB26.rotation.y += Math.PI/2;
scene.add(cdr26,cdrB26);
//etiqueta 26
var txq26 = new THREE.TextureLoader().load("img/etiq/e26.jpg");
var etq26 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.405,0.166),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txq26})
);
etq26.position.set(-9.99,0,5.2-((26-23)*2));
etq26.rotation.y += Math.PI/2;
scene.add(etq26);

//cuadro 27
var txt27 = new THREE.TextureLoader().load("img/cuadros/27.jpg");
var cdr27 = new THREE.Mesh(
    new THREE.PlaneGeometry(720/1000,960/1000),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txt27})
);
//borde cuadro 27
var cdrB27 = new THREE.Mesh(
    new THREE.BoxGeometry(720/1000,960/1000,0.05,0),
    new THREE.MeshBasicMaterial({color:0x232117})
);
cdr27.position.set(-9.9,0,6-((27-23)*2));
cdr27.rotation.y += Math.PI/2;
cdrB27.position.set(-9.925,0,6-((27-23)*2));
cdrB27.rotation.y += Math.PI/2;
scene.add(cdr27,cdrB27);
//etiqueta 27
var txq27 = new THREE.TextureLoader().load("img/etiq/e27.jpg");
var etq27 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.405,0.166),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txq27})
);
etq27.position.set(-9.99,0,5.2-((27-23)*2));
etq27.rotation.y += Math.PI/2;
scene.add(etq27);
