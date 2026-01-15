import {
  createInvoiceSchema,
  updateInvoiceSchema,
} from './invoice.schemas';

console.log('Testing Invoice Schemas...\n');

// Test 1: Create invoice with empty strings
console.log('Test 1: Create invoice with minimal data');
const createTest1 = createInvoiceSchema.safeParse({
  fromCompanyId: '',
  billToName: 'John Doe',
  billToEmail: 'john@example.com',
  issueDate: '2026-01-14',
  dueDate: '2026-02-14',
  lineItems: [
    {
      description: 'Service 1',
      quantity: 1,
      price: 100,
    },
  ],
});
console.log('Result:', createTest1.success ? '✅ PASS' : '❌ FAIL');
if (!createTest1.success) {
  console.log('Errors:', JSON.stringify(createTest1.error.issues, null, 2));
}

// Test 2: Update invoice with empty strings (the problematic case)
console.log('\nTest 2: Update invoice with empty strings');
const updateTest1 = updateInvoiceSchema.safeParse({
  description: '',
  notes: '',
  logoUrl: '',
  taxRate: 13,
});
console.log('Result:', updateTest1.success ? '✅ PASS' : '❌ FAIL');
if (!updateTest1.success) {
  console.log('Errors:', JSON.stringify(updateTest1.error.issues, null, 2));
}

// Test 3: Update invoice with undefined values
console.log('\nTest 3: Update invoice with undefined values');
const updateTest2 = updateInvoiceSchema.safeParse({
  description: undefined,
  notes: undefined,
  logoUrl: undefined,
  taxRate: undefined,
});
console.log('Result:', updateTest2.success ? '✅ PASS' : '❌ FAIL');
if (!updateTest2.success) {
  console.log('Errors:', JSON.stringify(updateTest2.error.issues, null, 2));
}

// Test 4: Update with lineItems containing valid data
console.log('\nTest 4: Update with valid lineItems');
const updateTest3 = updateInvoiceSchema.safeParse({
  taxRate: 15,
  lineItems: [
    {
      description: 'Updated service',
      quantity: 2,
      price: 200,
    },
  ],
});
console.log('Result:', updateTest3.success ? '✅ PASS' : '❌ FAIL');
if (!updateTest3.success) {
  console.log('Errors:', JSON.stringify(updateTest3.error.issues, null, 2));
}

// Test 5: Update with all optional address fields as empty strings
console.log('\nTest 5: Update with empty address fields');
const updateTest4 = updateInvoiceSchema.safeParse({
  billToAddress: '',
  billToCity: '',
  billToProvince: '',
  billToPostalCode: '',
  billToCountry: '',
});
console.log('Result:', updateTest4.success ? '✅ PASS' : '❌ FAIL');
if (!updateTest4.success) {
  console.log('Errors:', JSON.stringify(updateTest4.error.issues, null, 2));
}

// Test 6: Full update payload (simulating what mobile sends)
console.log('\nTest 6: Full update payload from mobile');
const updateTest5 = updateInvoiceSchema.safeParse({
  fromCompanyId: '123e4567-e89b-12d3-a456-426614174000',
  billToName: 'Jane Smith',
  billToEmail: 'jane@example.com',
  billToPhone: '+0987654321',
  billToAddress: '123 Main St',
  billToCity: 'Toronto',
  billToProvince: 'ON',
  billToPostalCode: 'M5H 2N2',
  billToCountry: 'Canada',
  issueDate: '2026-01-15',
  dueDate: '2026-02-15',
  taxRate: 13,
  description: '',
  notes: '',
  logoUrl: '',
  lineItems: [
    {
      description: 'Service',
      quantity: 1,
      price: 100,
    },
  ],
});
console.log('Result:', updateTest5.success ? '✅ PASS' : '❌ FAIL');
if (!updateTest5.success) {
  console.log('Errors:', JSON.stringify(updateTest5.error.issues, null, 2));
}

console.log('\n=== All tests completed ===');
