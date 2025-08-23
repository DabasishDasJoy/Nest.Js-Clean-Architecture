# Prisma Migration Flow

A step-by-step guide to managing schema changes in Prisma.

---

## 🔄 Standard Migration Flow

### 1. Change your Prisma schema

Edit `prisma/schema.prisma` to add, remove, or update models and fields.

Example:

```prisma
model User {
  id    Int     @id @default(autoincrement())
  name  String
  email String  @unique
  age   Int?    // <-- new field
}
```

---

### 2. Create a new migration

Run:

```bash
npx prisma migrate dev --name add-age-to-user
```

👉 What this does:

- Compares `schema.prisma` with the current database schema.
- Creates a SQL migration in `prisma/migrations/`.
- Applies it to your database.
- Updates the `_prisma_migrations` table.

---

### 3. Check & Test

- Confirm the database schema has been updated.
- Run your app or open `npx prisma studio` to test changes.

---

### 4. Commit your migration

Always commit both:

- `prisma/schema.prisma`
- `prisma/migrations/<timestamp>_<name>/migration.sql`

---

### 5. Push to other environments

In staging/production, run:

```bash
npx prisma migrate deploy
```

👉 This applies unapplied migrations.  
Unlike `migrate dev`, it won’t generate new ones or reset DB.

---

### 6. Handle Drift

Sometimes Prisma will warn about **drift** (schema ≠ DB).

Options:

- If DB is correct → `npx prisma db pull`
- If Prisma schema is correct → `npx prisma migrate dev`
- If migrations got desynced → `npx prisma migrate resolve`

---

## ⚡ Flowchart Summary

1. Change `schema.prisma`
2. `migrate dev` (local) → creates + applies migration
3. Commit migrations
4. Deploy code → run `migrate deploy` in staging/prod
5. If drift → fix with `db pull` / `migrate resolve`
6. Repeat ✅
