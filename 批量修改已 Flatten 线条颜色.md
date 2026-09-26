Project: [腹腔防粘连材料](腹腔防粘连材料.md)
Type: #Fiji 
Date: 2026-9-26

---
## Summary:
#### 1. 打开批处理界面  
菜单栏点击 `Process > Batch > Macro...`。
#### 2. 设置输入输出文件夹
- `Input...`：选择原图所在文件夹。
- `Output...`：**必须新建并选择另一个文件夹**（严禁与 Input 相同，防止原图被覆盖）。
- `Output format`：选择 `TIFF`（无损）。
#### 3. 粘贴宏代码
> if (bitDepth()!=24) run("RGB Color");
> changeValues(0xFFFF00, 0xFFFF00, 0x00FF00);

黄色为 `FFFF00`，亮绿色为 `00FF00`
> 若线条有抗锯齿残留，将第一个参数改为 `0xE0E000` 扩大替换范围。

#### 4. 测试并运行
- 先点击左下角 `Test` 按钮，确认单张图片颜色替换成功。
- 确认无误后，点击右下角 `Process` 开始批量处理。
#### ⚠️ 避坑提醒
- 不要使用 `if (!is("RGB"))`，在 Batch 界面会报语法错误，用 `bitDepth()!=24` 替代。
- 处理前务必备份原图数据。
## Setup:

## Notes:

---
created: 2026-09-26 15:16
tags: #Experiment