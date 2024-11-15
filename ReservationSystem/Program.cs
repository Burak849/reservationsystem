using Microsoft.EntityFrameworkCore;
using ReservationSystem.ReservationSystem.Api.Data;
var builder = WebApplication.CreateBuilder(args);

// CORS yapılandırmasını ekle
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp", policy =>
    {
        policy.WithOrigins("http://localhost:3000") // React'in çalıştığı port
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

// Diğer servisleri ekle
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddControllers();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// CORS politikasını kullan
app.UseCors("AllowReactApp");

// Swagger ve diğer yapılandırmalar
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.Run();
