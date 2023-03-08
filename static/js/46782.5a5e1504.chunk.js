"use strict";(self.webpackChunkhub_layout_versioning=self.webpackChunkhub_layout_versioning||[]).push([[46782],{48734:function(E,_,n){function T(E){switch(E){case"u8":case"i8":return 1;case"u16":case"i16":return 2;case"u32":case"i32":case"f32":return 4;case"f64":return 8}}function R(E){switch(E){case"u8":case"u16":case"u32":return!1;case"i8":case"i16":case"i32":case"f32":case"f64":return!0}}function A(E){switch(E){case"u8":case"u16":case"u32":case"i8":case"i16":case"i32":return!0;case"f32":case"f64":return!1}}function t(E){switch(E){case"u8":return 255;case"u16":return 65535;case"u32":return 4294967295;case"i8":return 127;case"i16":return 32767;case"i32":return 2147483647;case"f32":return 3402823e32;case"f64":return 179769e303}}n.d(_,{B3:function(){return R},Op:function(){return t},U:function(){return A},n1:function(){return T}})},35886:function(E,_,n){n.r(_),n.d(_,{loadGLTFMesh:function(){return x}});var T=n(37762),R=n(74165),A=n(15861),t=n(51995),e=n(76200),r=n(77427),N=n(16889),C=n(92026),u=n(22753),S=n(11873),O=n(71353),o=n(67077),I=n(64995),c=n(11587),i=n(79694),D=n(27474),a=n(25158),L=n(32035),M=n(19093),f=n(17054),U=n(57898),s=n(27053),G=n(57516),P=n(32315),B=n(57661),F=n(72838),l=n(68845),H=n(8548),p=n(92770),m=n(69618),d=n(19131);function x(E,_,n){return g.apply(this,arguments)}function g(){return(g=(0,A.Z)((0,R.Z)().mark((function E(_,n,A){var t,e,r,N,u,S,O,o,I,c,i,a,L,M,f,P,B;return(0,R.Z)().wrap((function(E){for(;;)switch(E.prev=E.next){case 0:return t=new s.C(V(A)),E.next=3,(0,G.Q)(t,n,A,!0);case 3:e=E.sent.model,r=e.lods.shift(),N=new Map,u=new Map,e.textures.forEach((function(E,_){return N.set(_,v(E))})),e.materials.forEach((function(E,_){return u.set(_,h(E,N))})),S=Y(r),O=(0,T.Z)(S.parts);try{for(O.s();!(o=O.n()).done;)I=o.value,b(S,I,u)}catch(R){O.e(R)}finally{O.f()}return c=S.vertexAttributes,i=c.position,a=c.normal,L=c.tangent,M=c.color,f=c.texCoord0,P={position:i.typedBuffer,normal:(0,C.pC)(a)?a.typedBuffer:null,tangent:(0,C.pC)(L)?L.typedBuffer:null,uv:(0,C.pC)(f)?f.typedBuffer:null,color:(0,C.pC)(M)?M.typedBuffer:null},B=(0,U.w1)(P,_,A),E.abrupt("return",{transform:B.transform,components:S.components,spatialReference:_.spatialReference,vertexAttributes:new D.Q({position:B.vertexAttributes.position,normal:B.vertexAttributes.normal,tangent:B.vertexAttributes.tangent,color:P.color,uv:P.uv})});case 13:case"end":return E.stop()}}),E)})))).apply(this,arguments)}function V(E){var _=null===E||void 0===E?void 0:E.resolveFile;return _?{busy:!1,request:function(){var E=(0,A.Z)((0,R.Z)().mark((function E(n,T,A){var t,r;return(0,R.Z)().wrap((function(E){for(;;)switch(E.prev=E.next){case 0:return t=_(n),r="image"===T?"image":"binary"===T?"array-buffer":"json",E.next=3,(0,e.default)(t,{responseType:r,signal:(0,C.pC)(A)?A.signal:null});case 3:return E.abrupt("return",E.sent.data);case 4:case"end":return E.stop()}}),E)})));return function(_,n,T){return E.apply(this,arguments)}}()}:null}function X(E,_){if((0,C.Wi)(E))return"-";var n=E.typedBuffer;return"".concat((0,r.s1)(_,n.buffer,(function(){return _.size})),"/").concat(n.byteOffset,"/").concat(n.byteLength)}function Y(E){var _,n=0,R={color:!1,tangent:!1,normal:!1,texCoord0:!1},A=new Map,t=new Map,e=[],N=(0,T.Z)(E.parts);try{var u=function(){var E=_.value,T=E.attributes,N=T.position,u=T.normal,S=T.color,O=T.tangent,o=T.texCoord0,I="\n      ".concat(X(N,A),"/\n      ").concat(X(u,A),"/\n      ").concat(X(S,A),"/\n      ").concat(X(O,A),"/\n      ").concat(X(o,A),"/\n      ").concat(function(E){return(0,C.pC)(E)?E.toString():"-"}(E.transform),"\n    "),c=!1,i=(0,r.s1)(t,I,(function(){return c=!0,{start:n,length:N.count}}));c&&(n+=N.count),u&&(R.normal=!0),S&&(R.color=!0),O&&(R.tangent=!0),o&&(R.texCoord0=!0),e.push({gltf:E,writeVertices:c,region:i})};for(N.s();!(_=N.n()).done;)u()}catch(S){N.e(S)}finally{N.f()}return{vertexAttributes:{position:(0,f.gS)(a.fP,n),normal:R.normal?(0,f.gS)(a.ct,n):null,tangent:R.tangent?(0,f.gS)(a.ek,n):null,color:R.color?(0,f.gS)(a.mc,n):null,texCoord0:R.texCoord0?(0,f.gS)(a.Eu,n):null},parts:e,components:[]}}function v(E){return new i.Z({data:((0,B.$A)(E.data),E.data),wrap:y(E.parameters.wrap)})}function h(E,_){var n,T=new t.Z(function(E,_){return(0,o.f)(k(E[0]),k(E[1]),k(E[2]),_)}(E.color,E.opacity)),R=E.emissiveFactor?new t.Z((n=E.emissiveFactor,(0,O.f)(k(n[0]),k(n[1]),k(n[2])))):null;return new c.Z({color:T,colorTexture:(0,C.Wg)((0,C.yw)(E.textureColor,(function(E){return _.get(E)}))),normalTexture:(0,C.Wg)((0,C.yw)(E.textureNormal,(function(E){return _.get(E)}))),emissiveColor:R,emissiveTexture:(0,C.Wg)((0,C.yw)(E.textureEmissive,(function(E){return _.get(E)}))),occlusionTexture:(0,C.Wg)((0,C.yw)(E.textureOcclusion,(function(E){return _.get(E)}))),alphaMode:w(E.alphaMode),alphaCutoff:E.alphaCutoff,doubleSided:E.doubleSided,metallic:E.metallicFactor,roughness:E.roughnessFactor,metallicRoughnessTexture:(0,C.Wg)((0,C.yw)(E.textureMetallicRoughness,(function(E){return _.get(E)}))),colorTextureTransform:E.colorTextureTransform,normalTextureTransform:E.normalTextureTransform,occlusionTextureTransform:E.occlusionTextureTransform,emissiveTextureTransform:E.emissiveTextureTransform,metallicRoughnessTextureTransform:E.metallicRoughnessTextureTransform})}function b(E,_,n){_.writeVertices&&function(E,_){var n=E.vertexAttributes,T=n.position,R=n.normal,A=n.tangent,t=n.color,e=n.texCoord0,r=_.region.start,O=_.gltf,o=O.attributes,I=O.transform,c=o.position.count;if((0,L.t)(T.slice(r,c),o.position,I),(0,C.pC)(o.normal)&&(0,C.pC)(R)){var i=(0,u.b)((0,S.c)(),I),D=R.slice(r,c);(0,L.a)(D,o.normal,i),(0,N.oc)(i)&&(0,L.n)(D,D)}else(0,C.pC)(R)&&(0,p.f)(R,0,0,1,{dstIndex:r,count:c});if((0,C.pC)(o.tangent)&&(0,C.pC)(A)){var f=(0,u.b)((0,S.c)(),I),U=A.slice(r,c);(0,M.t)(U,o.tangent,f),(0,N.oc)(f)&&(0,M.n)(U,U)}else(0,C.pC)(A)&&(0,m.f)(A,0,0,1,1,{dstIndex:r,count:c});if((0,C.pC)(o.texCoord0)&&(0,C.pC)(e)?(0,d.n)(e.slice(r,c),o.texCoord0):(0,C.pC)(e)&&(0,d.f)(e,0,0,{dstIndex:r,count:c}),(0,C.pC)(o.color)&&(0,C.pC)(t)){var s=o.color,G=t.slice(r,c);if(4===s.elementCount)s instanceof a.ek?(0,M.s)(G,s,255):s instanceof a.mc?(0,m.c)(G,s):s instanceof a.v6&&(0,M.a)(G,s,8);else{(0,m.f)(G,255,255,255,255);var P=a.ne.fromTypedArray(G.typedBuffer,G.typedBufferStride);s instanceof a.ct?(0,L.s)(P,s,255):s instanceof a.ne?(0,p.c)(P,s):s instanceof a.mw&&(0,L.b)(P,s,8)}}else(0,C.pC)(t)&&(0,m.f)(t.slice(r,c),255,255,255,255)}(E,_);var T=_.gltf,R=function(E,_){switch(_){case H.MX.TRIANGLES:return(0,P.nh)(E,F.DX);case H.MX.TRIANGLE_STRIP:return(0,P.DA)(E);case H.MX.TRIANGLE_FAN:return(0,P.jX)(E)}}(T.indices||T.attributes.position.count,T.primitiveType),A=_.region.start;if(A)for(var t=0;t<R.length;t++)R[t]+=A;E.components.push(new I.Z({faces:R,material:n.get(T.material),trustSourceNormals:!0}))}function w(E){switch(E){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function y(E){return{horizontal:W(E.s),vertical:W(E.t)}}function W(E){switch(E){case H.e8.CLAMP_TO_EDGE:return"clamp";case H.e8.MIRRORED_REPEAT:return"mirror";case H.e8.REPEAT:return"repeat"}}function k(E){return 255*Math.pow(E,1/l.K)}},68401:function(E,_,n){var T,R,A,t,e,r,N,C,u,S,O;n.d(_,{CE:function(){return N},Gv:function(){return R},Iq:function(){return S},JJ:function(){return u},Rw:function(){return t},Ti:function(){return O},V_:function(){return r},Vr:function(){return T},Xx:function(){return A},Yg:function(){return C},hU:function(){return e}}),function(E){E[E.None=0]="None",E[E.Front=1]="Front",E[E.Back=2]="Back",E[E.COUNT=3]="COUNT"}(T||(T={})),function(E){E[E.Less=0]="Less",E[E.Lequal=1]="Lequal",E[E.COUNT=2]="COUNT"}(R||(R={})),function(E){E[E.BACKGROUND=0]="BACKGROUND",E[E.UPDATE=1]="UPDATE"}(A||(A={})),function(E){E[E.NOT_LOADED=0]="NOT_LOADED",E[E.LOADING=1]="LOADING",E[E.LOADED=2]="LOADED"}(t||(t={})),function(E){E[E.IntegratedMeshMaskExcluded=1]="IntegratedMeshMaskExcluded",E[E.OutlineVisualElementMask=2]="OutlineVisualElementMask"}(e||(e={})),function(E){E[E.Highlight=0]="Highlight",E[E.MaskOccludee=1]="MaskOccludee",E[E.COUNT=2]="COUNT"}(r||(r={})),function(E){E[E.STRETCH=1]="STRETCH",E[E.PAD=2]="PAD"}(N||(N={})),function(E){E[E.CHANGED=0]="CHANGED",E[E.UNCHANGED=1]="UNCHANGED"}(C||(C={})),function(E){E[E.Blend=0]="Blend",E[E.Opaque=1]="Opaque",E[E.Mask=2]="Mask",E[E.MaskBlend=3]="MaskBlend",E[E.COUNT=4]="COUNT"}(u||(u={})),function(E){E[E.OFF=0]="OFF",E[E.ON=1]="ON"}(S||(S={})),function(E){E.DDS_ENCODING="image/vnd-ms.dds",E.KTX2_ENCODING="image/ktx2",E.BASIS_ENCODING="image/x.basis"}(O||(O={}))},8548:function(E,_,n){var T,R,A,t,e,r,N,C,u,S,O,o,I,c,i,D,a,L,M,f,U,s;n.d(_,{Br:function(){return D},Ho:function(){return M},LR:function(){return r},Ld:function(){return B},Lm:function(){return U},Lu:function(){return g},MX:function(){return R},No:function(){return I},OU:function(){return s},Se:function(){return l},Tg:function(){return a},V7:function(){return d},VI:function(){return c},VY:function(){return P},Wf:function(){return N},Y5:function(){return m},_g:function(){return G},cw:function(){return O},db:function(){return t},e8:function(){return o},g:function(){return C},l1:function(){return L},lP:function(){return i},lk:function(){return T},q_:function(){return F},qi:function(){return f},w0:function(){return e},wb:function(){return u},xS:function(){return S},zi:function(){return A}}),function(E){E[E.DEPTH_BUFFER_BIT=256]="DEPTH_BUFFER_BIT",E[E.STENCIL_BUFFER_BIT=1024]="STENCIL_BUFFER_BIT",E[E.COLOR_BUFFER_BIT=16384]="COLOR_BUFFER_BIT"}(T||(T={})),function(E){E[E.POINTS=0]="POINTS",E[E.LINES=1]="LINES",E[E.LINE_LOOP=2]="LINE_LOOP",E[E.LINE_STRIP=3]="LINE_STRIP",E[E.TRIANGLES=4]="TRIANGLES",E[E.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",E[E.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(R||(R={})),function(E){E[E.ZERO=0]="ZERO",E[E.ONE=1]="ONE",E[E.SRC_COLOR=768]="SRC_COLOR",E[E.ONE_MINUS_SRC_COLOR=769]="ONE_MINUS_SRC_COLOR",E[E.SRC_ALPHA=770]="SRC_ALPHA",E[E.ONE_MINUS_SRC_ALPHA=771]="ONE_MINUS_SRC_ALPHA",E[E.DST_ALPHA=772]="DST_ALPHA",E[E.ONE_MINUS_DST_ALPHA=773]="ONE_MINUS_DST_ALPHA",E[E.DST_COLOR=774]="DST_COLOR",E[E.ONE_MINUS_DST_COLOR=775]="ONE_MINUS_DST_COLOR",E[E.SRC_ALPHA_SATURATE=776]="SRC_ALPHA_SATURATE",E[E.CONSTANT_COLOR=32769]="CONSTANT_COLOR",E[E.ONE_MINUS_CONSTANT_COLOR=32770]="ONE_MINUS_CONSTANT_COLOR",E[E.CONSTANT_ALPHA=32771]="CONSTANT_ALPHA",E[E.ONE_MINUS_CONSTANT_ALPHA=32772]="ONE_MINUS_CONSTANT_ALPHA"}(A||(A={})),function(E){E[E.ADD=32774]="ADD",E[E.SUBTRACT=32778]="SUBTRACT",E[E.REVERSE_SUBTRACT=32779]="REVERSE_SUBTRACT"}(t||(t={})),function(E){E[E.ARRAY_BUFFER=34962]="ARRAY_BUFFER",E[E.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",E[E.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER",E[E.PIXEL_PACK_BUFFER=35051]="PIXEL_PACK_BUFFER",E[E.PIXEL_UNPACK_BUFFER=35052]="PIXEL_UNPACK_BUFFER",E[E.COPY_READ_BUFFER=36662]="COPY_READ_BUFFER",E[E.COPY_WRITE_BUFFER=36663]="COPY_WRITE_BUFFER"}(e||(e={})),function(E){E[E.FRONT=1028]="FRONT",E[E.BACK=1029]="BACK",E[E.FRONT_AND_BACK=1032]="FRONT_AND_BACK"}(r||(r={})),function(E){E[E.CW=2304]="CW",E[E.CCW=2305]="CCW"}(N||(N={})),function(E){E[E.BYTE=5120]="BYTE",E[E.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",E[E.SHORT=5122]="SHORT",E[E.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",E[E.INT=5124]="INT",E[E.UNSIGNED_INT=5125]="UNSIGNED_INT",E[E.FLOAT=5126]="FLOAT"}(C||(C={})),function(E){E[E.NEVER=512]="NEVER",E[E.LESS=513]="LESS",E[E.EQUAL=514]="EQUAL",E[E.LEQUAL=515]="LEQUAL",E[E.GREATER=516]="GREATER",E[E.NOTEQUAL=517]="NOTEQUAL",E[E.GEQUAL=518]="GEQUAL",E[E.ALWAYS=519]="ALWAYS"}(u||(u={})),function(E){E[E.ZERO=0]="ZERO",E[E.KEEP=7680]="KEEP",E[E.REPLACE=7681]="REPLACE",E[E.INCR=7682]="INCR",E[E.DECR=7683]="DECR",E[E.INVERT=5386]="INVERT",E[E.INCR_WRAP=34055]="INCR_WRAP",E[E.DECR_WRAP=34056]="DECR_WRAP"}(S||(S={})),function(E){E[E.NEAREST=9728]="NEAREST",E[E.LINEAR=9729]="LINEAR",E[E.NEAREST_MIPMAP_NEAREST=9984]="NEAREST_MIPMAP_NEAREST",E[E.LINEAR_MIPMAP_NEAREST=9985]="LINEAR_MIPMAP_NEAREST",E[E.NEAREST_MIPMAP_LINEAR=9986]="NEAREST_MIPMAP_LINEAR",E[E.LINEAR_MIPMAP_LINEAR=9987]="LINEAR_MIPMAP_LINEAR"}(O||(O={})),function(E){E[E.CLAMP_TO_EDGE=33071]="CLAMP_TO_EDGE",E[E.REPEAT=10497]="REPEAT",E[E.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"}(o||(o={})),function(E){E[E.TEXTURE_2D=3553]="TEXTURE_2D",E[E.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",E[E.TEXTURE_3D=32879]="TEXTURE_3D",E[E.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",E[E.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",E[E.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",E[E.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",E[E.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",E[E.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z",E[E.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY"}(I||(I={})),function(E){E[E.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",E[E.DEPTH_STENCIL=34041]="DEPTH_STENCIL",E[E.ALPHA=6406]="ALPHA",E[E.RGB=6407]="RGB",E[E.RGBA=6408]="RGBA",E[E.LUMINANCE=6409]="LUMINANCE",E[E.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",E[E.RED=6403]="RED",E[E.RG=33319]="RG",E[E.RED_INTEGER=36244]="RED_INTEGER",E[E.RG_INTEGER=33320]="RG_INTEGER",E[E.RGB_INTEGER=36248]="RGB_INTEGER",E[E.RGBA_INTEGER=36249]="RGBA_INTEGER"}(c||(c={})),function(E){E[E.RGBA4=32854]="RGBA4",E[E.R16F=33325]="R16F",E[E.RG16F=33327]="RG16F",E[E.RGB32F=34837]="RGB32F",E[E.RGBA16F=34842]="RGBA16F",E[E.R32F=33326]="R32F",E[E.RG32F=33328]="RG32F",E[E.RGBA32F=34836]="RGBA32F",E[E.R11F_G11F_B10F=35898]="R11F_G11F_B10F",E[E.RGB8=32849]="RGB8",E[E.RGBA8=32856]="RGBA8",E[E.RGB5_A1=32855]="RGB5_A1",E[E.R8=33321]="R8",E[E.RG8=33323]="RG8",E[E.R8I=33329]="R8I",E[E.R8UI=33330]="R8UI",E[E.R16I=33331]="R16I",E[E.R16UI=33332]="R16UI",E[E.R32I=33333]="R32I",E[E.R32UI=33334]="R32UI",E[E.RG8I=33335]="RG8I",E[E.RG8UI=33336]="RG8UI",E[E.RG16I=33337]="RG16I",E[E.RG16UI=33338]="RG16UI",E[E.RG32I=33339]="RG32I",E[E.RG32UI=33340]="RG32UI",E[E.RGB16F=34843]="RGB16F",E[E.RGB9_E5=35901]="RGB9_E5",E[E.SRGB8=35905]="SRGB8",E[E.SRGB8_ALPHA8=35907]="SRGB8_ALPHA8",E[E.RGB565=36194]="RGB565",E[E.RGBA32UI=36208]="RGBA32UI",E[E.RGB32UI=36209]="RGB32UI",E[E.RGBA16UI=36214]="RGBA16UI",E[E.RGB16UI=36215]="RGB16UI",E[E.RGBA8UI=36220]="RGBA8UI",E[E.RGB8UI=36221]="RGB8UI",E[E.RGBA32I=36226]="RGBA32I",E[E.RGB32I=36227]="RGB32I",E[E.RGBA16I=36232]="RGBA16I",E[E.RGB16I=36233]="RGB16I",E[E.RGBA8I=36238]="RGBA8I",E[E.RGB8I=36239]="RGB8I",E[E.R8_SNORM=36756]="R8_SNORM",E[E.RG8_SNORM=36757]="RG8_SNORM",E[E.RGB8_SNORM=36758]="RGB8_SNORM",E[E.RGBA8_SNORM=36759]="RGBA8_SNORM",E[E.RGB10_A2=32857]="RGB10_A2",E[E.RGB10_A2UI=36975]="RGB10_A2UI"}(i||(i={})),function(E){E[E.FLOAT=5126]="FLOAT",E[E.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",E[E.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",E[E.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",E[E.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",E[E.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",E[E.BYTE=5120]="BYTE",E[E.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",E[E.SHORT=5122]="SHORT",E[E.UNSIGNED_INT=5125]="UNSIGNED_INT",E[E.INT=5124]="INT",E[E.HALF_FLOAT=5131]="HALF_FLOAT",E[E.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",E[E.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",E[E.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",E[E.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV"}(D||(D={})),function(E){E[E.DEPTH_COMPONENT16=33189]="DEPTH_COMPONENT16",E[E.STENCIL_INDEX8=36168]="STENCIL_INDEX8",E[E.DEPTH_STENCIL=34041]="DEPTH_STENCIL",E[E.DEPTH_COMPONENT24=33190]="DEPTH_COMPONENT24",E[E.DEPTH_COMPONENT32F=36012]="DEPTH_COMPONENT32F",E[E.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",E[E.DEPTH32F_STENCIL8=36013]="DEPTH32F_STENCIL8"}(a||(a={})),function(E){E[E.STATIC_DRAW=35044]="STATIC_DRAW",E[E.DYNAMIC_DRAW=35048]="DYNAMIC_DRAW",E[E.STREAM_DRAW=35040]="STREAM_DRAW",E[E.STATIC_READ=35045]="STATIC_READ",E[E.DYNAMIC_READ=35049]="DYNAMIC_READ",E[E.STREAM_READ=35041]="STREAM_READ",E[E.STATIC_COPY=35046]="STATIC_COPY",E[E.DYNAMIC_COPY=35050]="DYNAMIC_COPY",E[E.STREAM_COPY=35042]="STREAM_COPY"}(L||(L={})),function(E){E[E.FRAGMENT_SHADER=35632]="FRAGMENT_SHADER",E[E.VERTEX_SHADER=35633]="VERTEX_SHADER"}(M||(M={})),function(E){E[E.FRAMEBUFFER=36160]="FRAMEBUFFER",E[E.READ_FRAMEBUFFER=36008]="READ_FRAMEBUFFER",E[E.DRAW_FRAMEBUFFER=36009]="DRAW_FRAMEBUFFER"}(f||(f={})),function(E){E[E.TEXTURE=0]="TEXTURE",E[E.RENDER_BUFFER=1]="RENDER_BUFFER",E[E.CUBEMAP=2]="CUBEMAP"}(U||(U={})),function(E){E[E.NONE=0]="NONE",E[E.DEPTH_RENDER_BUFFER=1]="DEPTH_RENDER_BUFFER",E[E.STENCIL_RENDER_BUFFER=2]="STENCIL_RENDER_BUFFER",E[E.DEPTH_STENCIL_RENDER_BUFFER=3]="DEPTH_STENCIL_RENDER_BUFFER",E[E.DEPTH_STENCIL_TEXTURE=4]="DEPTH_STENCIL_TEXTURE"}(s||(s={}));var G,P,B=33984;!function(E){E[E.Texture=0]="Texture",E[E.BufferObject=1]="BufferObject",E[E.VertexArrayObject=2]="VertexArrayObject",E[E.Shader=3]="Shader",E[E.Program=4]="Program",E[E.FramebufferObject=5]="FramebufferObject",E[E.Renderbuffer=6]="Renderbuffer",E[E.Sync=7]="Sync",E[E.COUNT=8]="COUNT"}(G||(G={})),function(E){E[E.COLOR_ATTACHMENT0=36064]="COLOR_ATTACHMENT0",E[E.COLOR_ATTACHMENT1=36065]="COLOR_ATTACHMENT1",E[E.COLOR_ATTACHMENT2=36066]="COLOR_ATTACHMENT2",E[E.COLOR_ATTACHMENT3=36067]="COLOR_ATTACHMENT3",E[E.COLOR_ATTACHMENT4=36068]="COLOR_ATTACHMENT4",E[E.COLOR_ATTACHMENT5=36069]="COLOR_ATTACHMENT5",E[E.COLOR_ATTACHMENT6=36070]="COLOR_ATTACHMENT6",E[E.COLOR_ATTACHMENT7=36071]="COLOR_ATTACHMENT7",E[E.COLOR_ATTACHMENT8=36072]="COLOR_ATTACHMENT8",E[E.COLOR_ATTACHMENT9=36073]="COLOR_ATTACHMENT9",E[E.COLOR_ATTACHMENT10=36074]="COLOR_ATTACHMENT10",E[E.COLOR_ATTACHMENT11=36075]="COLOR_ATTACHMENT11",E[E.COLOR_ATTACHMENT12=36076]="COLOR_ATTACHMENT12",E[E.COLOR_ATTACHMENT13=36077]="COLOR_ATTACHMENT13",E[E.COLOR_ATTACHMENT14=36078]="COLOR_ATTACHMENT14",E[E.COLOR_ATTACHMENT15=36079]="COLOR_ATTACHMENT15"}(P||(P={}));var F,l,H,p,m,d,x,g=33306;!function(E){E[E.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",E[E.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]="COMPRESSED_RGBA_S3TC_DXT1_EXT",E[E.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]="COMPRESSED_RGBA_S3TC_DXT3_EXT",E[E.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT",E[E.COMPRESSED_R11_EAC=37488]="COMPRESSED_R11_EAC",E[E.COMPRESSED_SIGNED_R11_EAC=37489]="COMPRESSED_SIGNED_R11_EAC",E[E.COMPRESSED_RG11_EAC=37490]="COMPRESSED_RG11_EAC",E[E.COMPRESSED_SIGNED_RG11_EAC=37491]="COMPRESSED_SIGNED_RG11_EAC",E[E.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",E[E.COMPRESSED_SRGB8_ETC2=37493]="COMPRESSED_SRGB8_ETC2",E[E.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37494]="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",E[E.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37495]="COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2",E[E.COMPRESSED_RGBA8_ETC2_EAC=37496]="COMPRESSED_RGBA8_ETC2_EAC",E[E.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37497]="COMPRESSED_SRGB8_ALPHA8_ETC2_EAC"}(F||(F={})),function(E){E[E.FLOAT=5126]="FLOAT",E[E.FLOAT_VEC2=35664]="FLOAT_VEC2",E[E.FLOAT_VEC3=35665]="FLOAT_VEC3",E[E.FLOAT_VEC4=35666]="FLOAT_VEC4",E[E.INT=5124]="INT",E[E.INT_VEC2=35667]="INT_VEC2",E[E.INT_VEC3=35668]="INT_VEC3",E[E.INT_VEC4=35669]="INT_VEC4",E[E.BOOL=35670]="BOOL",E[E.BOOL_VEC2=35671]="BOOL_VEC2",E[E.BOOL_VEC3=35672]="BOOL_VEC3",E[E.BOOL_VEC4=35673]="BOOL_VEC4",E[E.FLOAT_MAT2=35674]="FLOAT_MAT2",E[E.FLOAT_MAT3=35675]="FLOAT_MAT3",E[E.FLOAT_MAT4=35676]="FLOAT_MAT4",E[E.SAMPLER_2D=35678]="SAMPLER_2D",E[E.SAMPLER_CUBE=35680]="SAMPLER_CUBE",E[E.UNSIGNED_INT=5125]="UNSIGNED_INT",E[E.UNSIGNED_INT_VEC2=36294]="UNSIGNED_INT_VEC2",E[E.UNSIGNED_INT_VEC3=36295]="UNSIGNED_INT_VEC3",E[E.UNSIGNED_INT_VEC4=36296]="UNSIGNED_INT_VEC4",E[E.FLOAT_MAT2x3=35685]="FLOAT_MAT2x3",E[E.FLOAT_MAT2x4=35686]="FLOAT_MAT2x4",E[E.FLOAT_MAT3x2=35687]="FLOAT_MAT3x2",E[E.FLOAT_MAT3x4=35688]="FLOAT_MAT3x4",E[E.FLOAT_MAT4x2=35689]="FLOAT_MAT4x2",E[E.FLOAT_MAT4x3=35690]="FLOAT_MAT4x3",E[E.SAMPLER_3D=35679]="SAMPLER_3D",E[E.SAMPLER_2D_SHADOW=35682]="SAMPLER_2D_SHADOW",E[E.SAMPLER_2D_ARRAY=36289]="SAMPLER_2D_ARRAY",E[E.SAMPLER_2D_ARRAY_SHADOW=36292]="SAMPLER_2D_ARRAY_SHADOW",E[E.SAMPLER_CUBE_SHADOW=36293]="SAMPLER_CUBE_SHADOW",E[E.INT_SAMPLER_2D=36298]="INT_SAMPLER_2D",E[E.INT_SAMPLER_3D=36299]="INT_SAMPLER_3D",E[E.INT_SAMPLER_CUBE=36300]="INT_SAMPLER_CUBE",E[E.INT_SAMPLER_2D_ARRAY=36303]="INT_SAMPLER_2D_ARRAY",E[E.UNSIGNED_INT_SAMPLER_2D=36306]="UNSIGNED_INT_SAMPLER_2D",E[E.UNSIGNED_INT_SAMPLER_3D=36307]="UNSIGNED_INT_SAMPLER_3D",E[E.UNSIGNED_INT_SAMPLER_CUBE=36308]="UNSIGNED_INT_SAMPLER_CUBE",E[E.UNSIGNED_INT_SAMPLER_2D_ARRAY=36311]="UNSIGNED_INT_SAMPLER_2D_ARRAY"}(l||(l={})),function(E){E[E.OBJECT_TYPE=37138]="OBJECT_TYPE",E[E.SYNC_CONDITION=37139]="SYNC_CONDITION",E[E.SYNC_STATUS=37140]="SYNC_STATUS",E[E.SYNC_FLAGS=37141]="SYNC_FLAGS"}(H||(H={})),function(E){E[E.UNSIGNALED=37144]="UNSIGNALED",E[E.SIGNALED=37145]="SIGNALED"}(p||(p={})),function(E){E[E.ALREADY_SIGNALED=37146]="ALREADY_SIGNALED",E[E.TIMEOUT_EXPIRED=37147]="TIMEOUT_EXPIRED",E[E.CONDITION_SATISFIED=37148]="CONDITION_SATISFIED",E[E.WAIT_FAILED=37149]="WAIT_FAILED"}(m||(m={})),function(E){E[E.SYNC_GPU_COMMANDS_COMPLETE=37143]="SYNC_GPU_COMMANDS_COMPLETE"}(d||(d={})),function(E){E[E.SYNC_FLUSH_COMMANDS_BIT=1]="SYNC_FLUSH_COMMANDS_BIT"}(x||(x={}))}}]);
//# sourceMappingURL=46782.5a5e1504.chunk.js.map