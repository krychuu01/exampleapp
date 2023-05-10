create sequence if not exists public.id_seq as bigint start with 1000;

create table if not exists public.cars
(
    id bigint not null default nextval('id_seq') primary key,
    brand varchar(45),
    model varchar(45),
    productionYear varchar(4)
);