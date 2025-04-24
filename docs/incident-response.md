# Incident Response Procedure

## Step 1: Alert
- GitHub Actions failure notification
- Prometheus alert via email/Slack (if configured)

## Step 2: Diagnose
- Check recent deploy logs
- View `/metrics` endpoint
- Trace using OpenTelemetry logs

## Step 3: Fix & Postmortem
- Rollback via GitHub CI/CD workflow
- Document the issue in `docs/incidents/YYYY-MM-DD.md`
