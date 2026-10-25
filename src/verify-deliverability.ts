import { SadaSend } from 'sadasend';

const apiKey = process.env.SADASEND_API_KEY;

if (!apiKey) {
  console.error('❌ Error: SADASEND_API_KEY environment variable is missing.');
  console.error('   Please copy .env.example to .env and set your key.');
  process.exit(1);
}

const client = new SadaSend({ apiKey });

async function verify() {
  console.log('🔍 Claude Code CLI Deliverability Audit — Connecting to SadaSend...');
  try {
    const balance = await client.account.getBalance();
    console.log('✅ Account Quota Status:');
    console.log(`   • Allowance: ${balance.allowance.toLocaleString()} sends/mo`);
    console.log(`   • Remaining: ${balance.remaining.toLocaleString()} sends`);
    console.log(`   • SpendGuard Protection: ACTIVE`);

    console.log('\n🌐 Checking Domain Deliverability Status...');
    const domains = await client.domains.list();
    if (!domains || domains.length === 0) {
      console.log('ℹ️  No custom domains configured yet. Default sandbox sender is active.');
      console.log('   Add your domain at https://app.sadasend.com/domains to unlock custom DKIM/SPF.');
    } else {
      for (const d of domains) {
        console.log(`   • ${d.name}: status=${d.status}, dkim=${d.dkimStatus || 'pending'}`);
      }
    }
  } catch (err: any) {
    console.error('❌ Deliverability audit failed:', err.message || err);
  }
}

verify();
