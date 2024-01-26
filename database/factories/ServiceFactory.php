<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\Freelance;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Service>
 */
class ServiceFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $freelance = Freelance::inRandomOrder()->first();

        $category = Category::find($freelance->category_id)->id;

        $sousCategory = \App\Models\SubCategory::where('category_id', $category)->Limit(3)->get();
        foreach ($sousCategory as $item) {
            $sousCat[] = $item->name;
        };
        return [
            'service_numero' => $this->faker->ean8(),
            'title' => $this->faker->sentence(4),
            'tag' => ["laravel", "Site", "Devellopement"],
            'description' => $this->faker->text,
            'basic_price' => $this->faker->randomFloat(2, 0, 999.99),
            'basic_support' => ["tailwindcss", "toto", "lolo"],
            'basic_revision' => $this->faker->numberBetween(-10000, 10000),
            'basic_delivery_time' => $this->faker->numberBetween(-10000, 10000),
            'premium_price' => $this->faker->randomFloat(2, 0, 999999.99),
            'premium_support' => ["tailwindcss", "toto", "lolo"],
            'premium_revision' => $this->faker->numberBetween(1, 10),
            'premium_delivery_time' => $this->faker->numberBetween(1, 10),
            'extra_price' => $this->faker->randomFloat(2, 0, 999.99),
            'extra_support' => ["tailwindcss", "toto", "lolo"],
            'extra_revision' => $this->faker->numberBetween(1, 10),
            'extra_delivery_time' => $this->faker->numberBetween(1, 10),
            'delivery_time_unit' => 'jours',
            'need_service' => $this->faker->text,
            'example' => $this->faker->text,
            'sub_category' => ["1", "2"],
            'files' => ['illustration/deco.png'],
            'format' => $this->faker->word,
            'video_url' => $this->faker->word,
            'view_count' => $this->faker->numberBetween(1, 100000),
            'like' => $this->faker->numberBetween(1, 100000),
            'is_publish' => 1,
            'freelance_id' => $freelance->id,
            'category_id' => $category,
        ];
    }
}
