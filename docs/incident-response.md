# Playbook: Service Down

## Symptoms:
- App unreachable
- Logs show 500 errors

## Actions:
1. SSH into server
2. Check logs via `docker logs`
3. Restart service using `pm2 restart app`
