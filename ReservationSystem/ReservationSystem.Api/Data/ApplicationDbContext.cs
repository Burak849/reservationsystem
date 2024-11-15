using Microsoft.EntityFrameworkCore;
using ReservationSystem.Models.ReservationSystem.Models;

namespace ReservationSystem.ReservationSystem.Api.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        // Entity'leri tanımla
        public DbSet<Reservation> Reservations { get; set; }
    }
}
