<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\Category;
use App\Models\Freelance;
use App\Models\User;

class FreelanceFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Freelance::class;

    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        return [
            'nom' => $this->faker->name,
            'prenom' => $this->faker->lastName,
            'identifiant' => $this->faker->regexify('[A-Za-z0-9]{15}'),
            'description' => $this->faker->text,
            'experience' => $this->faker->word,
            'langue' => [[
                'langue' => $this->faker->randomElement(array('Francais', 'Anglais')),
                'level' => $this->faker->randomElement(array('Debutant', 'Intermediaire', 'Avancee')),
            ]],
            'diplome' => ['diplome' => 'FSI', 'universite' => $this->faker->city(), 'annee' => $this->faker->year('now')],
            'certificat' => [['certificate' => $this->faker->jobTitle(), 'delivrer' => $this->faker->company(), 'annee' => $this->faker->year('now')]],

            'site' =>
            $this->faker->domainName(),
            'competences' => [['skill' => $this->faker->randomElement(array('Debutant', 'Intermediaire', 'Avancee')), 'level' => $this->faker->randomElement(array('Debutant', 'Intermediaire', 'Avancee'))]],
            'taux_journalier' => $this->faker->randomFloat(2, 0, 999.99),
            'comptes' =>
            [[
                'tiktok' => $this->faker->userName(),
            ]],
            'sub_categorie' => ['1'],
            'localisation' => [[
                'avenue' => $this->faker->Address(),
                'commune' => $this->faker->city(),
                'ville' => $this->faker->city()
            ]],
            'user_id' =>User::factory(),
            'category_id' =>  Category::inRandomOrder()->first()->id,
            'level' => $this->faker->randomElement(["1", "2", "3", "4", "5"]),
            'solde' => $this->faker->randomFloat(2, 0, 999999.99),
        ];
    }
}
