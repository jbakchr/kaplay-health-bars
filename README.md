# KAPLAY Health Bars

Easily add customizable health bars to your KAPLAY games!

## 📦 Installation

Install via npm:

```bash
npm i kaplay-health-bars
```

## 🚀 Usage

Import the health bar into your kaplay project:

```javascript
import kaplay from "kaplay";
import "kaplay/global";

import { makeHealthBar } from "kaplay-health-bars";

kaplay();

const hb = makeHealthBar(300, 30, 100, 100, 100);

add(hb);

// Use kaplays "hurt()" method to decrease health
hb.hurt();

// Use kaplays "heal()" method to increase health
hb.heal();
```

### Parameters

The health bar can take the following parameters:

| Parameter     | Type     | Default | Required | Description          |
| ------------- | -------- | ------- | -------- | -------------------- |
| `w`           | `number` | N/A     | ✅ Yes   | Width of health bar  |
| `h`           | `number` | N/A     | ✅ Yes   | Height of health bar |
| `x`           | `number` | N/A     | ✅ Yes   | x position           |
| `y`           | `number` | N/A     | ✅ Yes   | y position           |
| `hp`          | `number` | N/A     | ✅ Yes   | Number of health     |
| `healthColor` | `rgb`    | GREEN   | ❌ No    | Health bar colour    |

## License

This project is licensed under the MIT License - see the LICENSE file for details.

<br>

## Contact

Have questions or suggestions? Reach out via:

- GitHub Issues
