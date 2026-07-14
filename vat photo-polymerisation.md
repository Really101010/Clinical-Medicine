---
tags:
  - Material
---
### 1. SLA（立体光固化，Stereolithography）

- 最早出现的光固化技术。
- **原理**：使用**激光**（Laser）通过**振镜系统（Galvo Mirrors）** 进行**逐点扫描**固化。
- **关键点**：
    - **精度高**：可制造高分辨率零件。
        
    - **表面光洁度好**（Smooth surface finish）。
        
    - **可制透明件**：能打印如镜片（Lens）等透明物体。
- **速度**：相对较慢（逐点扫描）。
- **应用**：Formlabs 的快速模具树脂（Fast Model Resin），专为热成型等高速吞吐量场景设计。

---
### 2. DLP（数字光处理，Digital Light Processing）

- **原理**：使用**数字光投影仪**进行**面成型**（一次性固化整个截面）。
- **关键点**：
    - **速度比SLA快**，因为每次投影固化一整层，而非逐点扫描。
    - resins
![](Pasted%20image%2020260714102924.png)
---
### 3. DLS（数字光合成，Digital Light Synthesis）= CLIP 

- 与SLA、DLP并列的先进光固化技术（代表性厂商为 **Carbon 3D**）
- **原理**：利用**数字光投影**（类似DLP）结合**透氧膜（<mark style="background-color: #1A4F10; color: white">CLIP</mark>技术，连续液面生长）**，在桶底形成“死区”（氧气抑制固化），实现**连续、无层纹**的快速生长。
- **关键点**
    - **速度极快**：比传统SLA快数十倍至上百倍。
    - **力学性能优异**：各向同性好，可量产终端零件（而非仅原型）
![511](Pasted%20image%2020260714103009.png)