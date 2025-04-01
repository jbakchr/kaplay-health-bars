const makeHealthBar = (w, h, x, y, hp, healthColor = GREEN) => {
  // Health bar base
  const healthBarBase = make([
    rect(w, h),
    pos(x, y),
    outline(6, WHITE),
    health(hp),
  ]);

  // Event handlers
  healthBarBase.onHurt((amount) => {
    if (healthBar.width > 0) {
      healthBar.width = healthBar.width - (w / hp) * amount;
    }
  });

  healthBarBase.onHeal((amount) => {
    if (healthBar.width < w) {
      healthBar.width = healthBar.width + (w / hp) * amount;
    }
  });

  // Damage bar
  const damageBar = make([rect(w, h), color(BLACK)]);

  // Health bar
  const healthBar = make([rect(w, h), color(healthColor)]);

  // Add damage and health bar
  healthBarBase.add(damageBar);
  healthBarBase.add(healthBar);

  return healthBarBase;
};
