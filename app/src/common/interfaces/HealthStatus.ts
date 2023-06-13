interface HealthStatusInterface {
  health: string;
  uptime: string;
}

export default class HealthStatus implements HealthStatusInterface {
  health: string;
  uptime: string;

  constructor(health: string, uptime: string) {
    this.health = health;
    this.uptime = uptime;
  }
}
